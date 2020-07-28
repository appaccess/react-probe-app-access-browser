import { ScreenCaptureStore } from './ScreenCaptureStore';
import v1 from '../assets/2020.04/views/0f93d2d014a349f49509f939c511f395.json';
import v2 from '../assets/2020.04/views/1be026ce565846818574baac5de9d33a.json';
import v3 from '../assets/2020.04/views/9c56fb5ec62142139c08704007dfbdb5.json';
import v4 from '../assets/2020.04/views/94dac030896c4c58bd50d904b36f4104.json';
import v5 from '../assets/2020.04/views/58321fca1217420ba253cc5aef910d94.json';
import v6 from '../assets/2020.04/views/913891a7afd64ca39c900512957f3bc7.json';
import v7 from '../assets/2020.04/views/bacf06efdf10462e95e1ff10ede66048.json';
import v8 from '../assets/2020.04/views/c3cb8ae984c84045b4c47b689ff8a4e5.json';
import v9 from '../assets/2020.04/views/d6e6746419e041efa54e28aefcc0ba2b.json';
import v10 from '../assets/2020.04/views/fc20f5de6d434aa8984b314a23237102.json';

import s1 from '../assets/2020.04/screenshots/0f93d2d014a349f49509f939c511f395.png';
import s2 from '../assets/2020.04/screenshots/1be026ce565846818574baac5de9d33a.png';
import s3 from '../assets/2020.04/screenshots/9c56fb5ec62142139c08704007dfbdb5.png';
import s4 from '../assets/2020.04/screenshots/94dac030896c4c58bd50d904b36f4104.png';
import s5 from '../assets/2020.04/screenshots/58321fca1217420ba253cc5aef910d94.png';
import s6 from '../assets/2020.04/screenshots/913891a7afd64ca39c900512957f3bc7.png';
import s7 from '../assets/2020.04/screenshots/bacf06efdf10462e95e1ff10ede66048.png';
import s8 from '../assets/2020.04/screenshots/c3cb8ae984c84045b4c47b689ff8a4e5.png';
import s9 from '../assets/2020.04/screenshots/d6e6746419e041efa54e28aefcc0ba2b.png';
import s10 from '../assets/2020.04/screenshots/fc20f5de6d434aa8984b314a23237102.png';

export class AppCrawlStore {
    date: string;
    screenCaptures: ScreenCaptureStore[];
    // TODO: graph that relates screens 
    // TODO: version of app

    constructor(datePath: string) { // datePath should be of form 'YYYY.MM'
        this.date = datePath;
        this.screenCaptures = [];


        this.screenCaptures.push(new ScreenCaptureStore(this.date, 'N/A', v1, s1));
        this.screenCaptures.push(new ScreenCaptureStore(this.date, 'N/A', v2, s2));
        this.screenCaptures.push(new ScreenCaptureStore(this.date, 'N/A', v3, s3));
        this.screenCaptures.push(new ScreenCaptureStore(this.date, 'N/A', v4, s4));
        this.screenCaptures.push(new ScreenCaptureStore(this.date, 'N/A', v5, s5));
        this.screenCaptures.push(new ScreenCaptureStore(this.date, 'N/A', v6, s6));
        this.screenCaptures.push(new ScreenCaptureStore(this.date, 'N/A', v7, s7));
        this.screenCaptures.push(new ScreenCaptureStore(this.date, 'N/A', v8, s8));
        this.screenCaptures.push(new ScreenCaptureStore(this.date, 'N/A', v9, s9));
        this.screenCaptures.push(new ScreenCaptureStore(this.date, 'N/A', v10, s10));

        // TODO: find some way to put this in a loop
        //require.context(`src/assets/${datePath}/screenshots`, false, /.json$/);

        /*
        const path = require('path');
        const fs = require('fs'); // try importing instead

        const directoryPath = path.join(__dirname, '..', 'assets', datePath, 'screenshots'); //check this
        fs.readdirSync(directoryPath).forEach((file: string) => { // for (file in '../assets/${datePath}/views') {
            this.screenCaptures.push(new ScreenCaptureStore(this.date, file))
        });
        */
    }
    
}

export default AppCrawlStore;