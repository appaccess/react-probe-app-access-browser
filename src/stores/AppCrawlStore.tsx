import { ScreenCaptureStore } from './ScreenCaptureStore';
import { v1, v2, v3, v4, v5, v6, v7, v8, v9, v10,
         s1, s2, s3, s4, s5, s6, s7, s8, s9, s10 } from '../common/ImportedAssets';

export class AppCrawlStore {
    date: string; // not currently used, anticipated use is for when multiple crawls at different dates are displayed
    screenCaptures: ScreenCaptureStore[];
    // TODO: graph that relates screens 
    // TODO: version of app

    constructor(datePath: string) { // datePath should be of form 'YYYY.MM'
        this.date = datePath;
        this.screenCaptures = [
                                new ScreenCaptureStore(this.date, 'N/A', v1, s1),
                                new ScreenCaptureStore(this.date, 'N/A', v2, s2),
                                new ScreenCaptureStore(this.date, 'N/A', v3, s3),
                                new ScreenCaptureStore(this.date, 'N/A', v4, s4),
                                new ScreenCaptureStore(this.date, 'N/A', v5, s5),
                                new ScreenCaptureStore(this.date, 'N/A', v6, s6),
                                new ScreenCaptureStore(this.date, 'N/A', v7, s7),
                                new ScreenCaptureStore(this.date, 'N/A', v8, s8),
                                new ScreenCaptureStore(this.date, 'N/A', v9, s9),
                                new ScreenCaptureStore(this.date, 'N/A', v10, s10)
                            ];
    }
}

export default AppCrawlStore;