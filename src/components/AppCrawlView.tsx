import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import { AppCrawlStore } from '../stores/AppCrawlStore';
import { ScreenCaptureStore } from '../stores/ScreenCaptureStore';

import { ScreenCaptureView } from './ScreenCaptureView';

interface AppCrawlViewProps {
    appCrawl: AppCrawlStore;
}

export const AppCrawlView: FunctionComponent<AppCrawlViewProps> = (props) => {
    const [onIndex, setIndex] = useState(0);
    const screens: ScreenCaptureStore[] = props.appCrawl.screenCaptures; //CHANGE

    const handleClickBack = () => {
        if (onIndex === 0) {
            setIndex(screens.length - 1);
        }
        else {
            setIndex(onIndex - 1);
        }
    }

    const handleClickForward = () => {
        if (onIndex === screens.length - 1) {
            setIndex(0);
        }
        else {
            setIndex(onIndex + 1);
        }
    }
    
    return (
        <div>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <button onClick={handleClickBack}>Back</button>
                    <button onClick={handleClickForward}>Forward</button>
                </div>

                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <p>Page {onIndex+1} of {screens.length}</p>
                    <br />
                </div>

                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <img src={screens[onIndex].screenshot} alt={(onIndex+1).toString()} width="300" /> // screenshot may need to be changed after hardcoded testing

                    <ScreenCaptureView screenCap={screens[onIndex]} />
                </div>
            </div>
    );
}
export default AppCrawlView;