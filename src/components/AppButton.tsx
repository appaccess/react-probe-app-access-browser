import * as React from 'react';

import { useState } from 'react';
import { AppCrawlStore } from '../stores/AppCrawlStore';
import { AppCrawlView } from '../components/AppCrawlView';

import { Button } from "@material-ui/core";

export const AppButton = () => {
    const [hasBeenClicked, setClick] = useState(false);
    const handleClick = () => {
        if (hasBeenClicked) {
            setClick(false);
        }
        else {
            setClick(true);
        }
        
    }

    if (!hasBeenClicked) {
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