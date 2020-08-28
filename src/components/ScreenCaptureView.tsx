import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import { ScreenCaptureStore } from '../stores/ScreenCaptureStore';
import { Screen } from '../types/Screen';

interface ScreenCaptureViewProps {
    screenCap: ScreenCaptureStore;
}

export const ScreenCaptureView: FunctionComponent<ScreenCaptureViewProps> = (props) => {
    const [rectLeft, setRectLeft] = useState(0);
    const [rectRight, setRectRight] = useState(0);
    const [rectTop, setRectTop] = useState(0);
    const [rectBottom, setRectBottom] = useState(0);

    const [hasBeenClicked, setHasBeenClicked] = useState(false);

    const onMouseClick = (e: any) => {
        setHasBeenClicked(true);

        let x = e.nativeEvent.offsetX;
        let y = e.nativeEvent.offsetY;

        // TODO: look into json data to see if lowest element in hierarchy for the bound and set top, left, width, height accordingly (or top, bottom, left, right)
        findChildInBound(props.screenCap.view, x, y); // note: this method is not working-- coordinates system of e and div must be resolved
    }

    const findChildInBound = (thisScreen: Screen, x: any, y: any) => {
        if (thisScreen.rect.left <= x &&
            thisScreen.rect.right >= x &&
            thisScreen.rect.top <= y &&
            thisScreen.rect.bottom >= y) {

            let found = false;
            for (let i = 0; i < thisScreen.children.length; i++) {
                if (findChildInBound(thisScreen.children[i], x, y)) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                console.log(thisScreen.className);
                console.log(`${x} ${y} ${thisScreen.rect.left} ${thisScreen.rect.right} ${thisScreen.rect.top} ${thisScreen.rect.bottom}`);
                setRectLeft(thisScreen.rect.left);
                setRectRight((thisScreen.screenWidth - thisScreen.rect.right));
                setRectTop(thisScreen.rect.top);
                setRectBottom((thisScreen.screenHeight - thisScreen.rect.bottom));
                return true;
            }
        }
    }

    return (
        <div onClick={onMouseClick} style={{position: "relative", justifyContent:'center'}} >
            <img src={props.screenCap.screenshot} style={{width: 300,  zIndex: 0}}/>
            {hasBeenClicked && <div style={{position: "absolute", zIndex: 2, left: rectLeft, right: rectRight, top: rectTop, bottom: rectBottom, border:"solid black 5px"}}></div>}
        </div>
    );
}

export default ScreenCaptureView;