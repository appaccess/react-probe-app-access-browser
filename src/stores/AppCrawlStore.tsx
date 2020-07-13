import { ScreenCaptureStore } from './ScreenCaptureStore';

export class AppCrawlStore {
    date: string;
    screenCaptures: ScreenCaptureStore[];
    // TODO: graph that relates screens
    // TODO: version of app

    constructor(datePath: string) { // note: datePath should be of form 'YYYY.MM'
        this.date = datePath;
        this.screenCaptures = [];

        const path = require('path');
        const fs = require('fs');

        const directoryPath = path.join(__dirname, '..', 'assets', datePath, 'screenshots')
        fs.readdirSync(directoryPath).forEach((file: string) => { // for (file in '../assets/${datePath}/views') {
            this.screenCaptures.push(new ScreenCaptureStore(this.date, file))
        });
    }
    
}

export default AppCrawlStore;