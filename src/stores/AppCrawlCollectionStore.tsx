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
/*
let INSTANCE: AppCrawlCollectionStore | null = null;

export function createAppCrawlCollectionStore(appName: string, dateRange: string[]) : AppCrawlCollectionStore {
    //if (INSTANCE) {
    //    throw new Error('There can only be one AppCrawlCollectionStore.');
    //}
    
   INSTANCE = new AppCrawlCollectionStoreImpl(appName, dateRange);

   return getAppCrawlCollectionStore();
}

export function getAppCrawlCollectionStore() {
    if (INSTANCE === null) {
        throw new Error('AppCrawlCollectionStore not created';)
    }

    return INSTANCE;
}
*/