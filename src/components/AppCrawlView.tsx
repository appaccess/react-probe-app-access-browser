import * as React from 'react';
import { FunctionComponent, useState } from 'react';

import { AppCrawlStore } from '../stores/AppCrawlStore';
import { ScreenCaptureStore } from '../stores/ScreenCaptureStore';
import { ScreenCaptureView } from './ScreenCaptureView';

import { Button } from "@material-ui/core";

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
                    <Button onClick={handleClickBack}>Back</Button>
                    <Button onClick={handleClickForward}>Forward</Button>
                </div>

                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <p>Page {onIndex+1} of {screens.length}</p>
                    <br />
                </div>

                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>

                    <ScreenCaptureView screenCap={screens[onIndex]} />
                </div>
            </div>
    );
}
export default AppCrawlView;