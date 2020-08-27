import { AppCrawlStore } from './AppCrawlStore';

export interface AppCrawlCollectionStore {
    crawls: AppCrawlStore[];
    appName: string;
    dateRange: string[]; // dateRange should be an array of datePaths of form 'YYYY.MM'
}

export class AppCrawlCollectionStoreImpl implements AppCrawlCollectionStore {
    crawls: AppCrawlStore[];
    appName: string;
    dateRange: string[];

    constructor(appName: string, dateRange: string[]) {
        this.appName = appName;
        this.dateRange = dateRange;
        this.crawls = [];

        for (let date of dateRange) {
            this.crawls.push(new AppCrawlStore(date));
        }
    }
}

export default AppCrawlCollectionStoreImpl;