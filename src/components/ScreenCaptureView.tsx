import * as React from 'react';
import { FunctionComponent } from 'react';
import { ScreenCaptureStore } from '../stores/ScreenCaptureStore';

interface ScreenCaptureViewProps {
    screenCap: ScreenCaptureStore
}

export const ScreenCaptureView: FunctionComponent<ScreenCaptureViewProps> = (props) => {
    return (
        <img src={props.screenCap.screenshot}/> // < for hardcoded testing with imported screenshots //<img src={require(props.screenCap.imagePath)} />
    );

}
export default ScreenCaptureView;