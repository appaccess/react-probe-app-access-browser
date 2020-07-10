import * as React from 'react';
import { AppCrawlCollectionStore, AppCrawlCollectionStoreImpl } from '../stores/AppCrawlCollectionStore';

import { AppCrawlView } from './AppCrawlView';


interface IProps {
}

interface IState {
    appCrawlCollection: AppCrawlCollectionStore; // this may later be good to pass in as props?
}

export class AppCrawlCollectionView extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        
        this.state = {
            appCrawlCollection: new AppCrawlCollectionStoreImpl('GrubHub', ['2020.02', '2020.03', '2020.04', '2020.05', '2020.06']),
        }
    }

    // TODO: make this dynamic somehow, for loops?
    render() {
        return ( 
            <div>
                <AppCrawlView appCrawl={this.state.appCrawlCollection.crawls[0]}/>
                <AppCrawlView appCrawl={this.state.appCrawlCollection.crawls[1]}/>
                <AppCrawlView appCrawl={this.state.appCrawlCollection.crawls[2]}/>
                <AppCrawlView appCrawl={this.state.appCrawlCollection.crawls[3]}/>
                <AppCrawlView appCrawl={this.state.appCrawlCollection.crawls[4]}/>
            </div>
        );
    }
}