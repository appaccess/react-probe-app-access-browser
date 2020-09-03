import * as React from 'react';

import { useState } from 'react';
import { AppCrawlStore } from '../stores/AppCrawlStore';
import { AppCrawlView } from '../components/AppCrawlView';
import { FunctionComponent } from 'react';

import { Button } from "@material-ui/core";

interface AppButtonProps {
    width: number,
    height: number
}

export const AppButton: FunctionComponent<AppButtonProps> = () => {
    const [isClicked, setClick] = useState(false);

    const handleClick = () => {
        setClick(!isClicked);
    }

    if (!isClicked) {
        return (
            <Button onClick={handleClick}>GrubHub</Button>
        )
    }
    
    else {
        return (
            <div>
                <Button onClick={handleClick}>GrubHub</Button>
                <AppCrawlView appCrawl={new AppCrawlStore('2020.04')} />
            </div>
        )
    }
}

export default AppButton;