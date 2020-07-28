import * as React from 'react';
import { AppCrawlCollectionStore, AppCrawlCollectionStoreImpl } from '../stores/AppCrawlCollectionStore';

import { AppCrawlView } from './AppCrawlView';

export const AppCrawlCollectionView = () => {
    // TODO pass in AppCrawlCollectionStore as props
    const appCrawlCollection: AppCrawlCollectionStore = new AppCrawlCollectionStoreImpl('GrubHub', ['2020.02', '2020.03', '2020.04', '2020.05', '2020.06']);

    return (
        // TODO for loop here to make it dynamic depending on how many AppCrawlViews in AppCrawlCollection
        <div>
            <AppCrawlView appCrawl={appCrawlCollection.crawls[0]}/>
            <AppCrawlView appCrawl={appCrawlCollection.crawls[1]}/>
            <AppCrawlView appCrawl={appCrawlCollection.crawls[2]}/>
            <AppCrawlView appCrawl={appCrawlCollection.crawls[3]}/>
            <AppCrawlView appCrawl={appCrawlCollection.crawls[4]}/>
        </div>
    )
}

export default AppCrawlCollectionView;