import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import { ScreenCaptureStore } from '../stores/ScreenCaptureStore';

interface ScreenCaptureViewProps {
    screenCap: ScreenCaptureStore
}

export const ScreenCaptureView: FunctionComponent<ScreenCaptureViewProps> = (props) => {
    const [rectangleWidth, setWidth] = useState(280);
    const [rectangleHeight, setHeight] = useState(150);

    const [rectX, setRectX] = useState(0);
    const [rectY, setRectY] = useState(0);

    const onMouseClick = (e: any) => {

        setRectX(e.nativeEvent.offsetX);
        setRectY(e.nativeEvent.offsetY);

        setWidth(280);
        setHeight(150);

    }

    

    return (
        <div style={{position: "relative", justifyContent:'center'}} >
            
            <img onClick={onMouseClick} src={props.screenCap.screenshot} style={{width: 300,  zIndex: 1}} />
            <div style={{position: "absolute", zIndex: 2, width: rectangleWidth, height: rectangleHeight, left: rectX, top: rectY, border:"solid black 5px"}}></div>
        </div>
    );

}
export default ScreenCaptureView;