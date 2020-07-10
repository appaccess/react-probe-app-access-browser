import * as React from 'react';
import { AppCrawlStore } from '../stores/AppCrawlStore';
import { ScreenCaptureStore } from '../stores/ScreenCaptureStore';
import { ScreenCaptureView } from './ScreenCaptureView';

interface IProps {
    appCrawl: AppCrawlStore;
}

interface IState {
    onIndex: number;
    screens: ScreenCaptureStore[];
}

export class AppCrawlView extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            onIndex: 0,
            screens: this.props.appCrawl.screenCaptures,
        }

        this.onClickBack = this.onClickBack.bind(this);
        this.onClickForward = this.onClickForward.bind(this);
    }

    onClickBack() {
        if (this.state.onIndex === 0) {
            this.setState({
                onIndex: this.state.screens.length - 1,
            })
        }
        else {
            this.setState({
                onIndex: this.state.onIndex - 1,
            })
        }
    }

    onClickForward() {
        if (this.state.onIndex === this.state.screens.length - 1) {
            this.setState({
                onIndex: 0,
            })
        }
        else {
            this.setState({
                onIndex: this.state.onIndex + 1,
            })
        }
    }

    render() {
        return (
            <div>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <button onClick={this.onClickBack}>Back</button>
                        <button onClick={this.onClickForward}>Forward</button>
                    </div>

                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <p>Page {this.state.onIndex+1} of {this.state.screens.length}</p>
                        <br />
                    </div>

                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <img src={this.state.screens[this.state.onIndex].imagePath} alt={(this.state.onIndex+1).toString()} width="300" />

                        <ScreenCaptureView screenCap={this.state.screens[this.state.onIndex]} />
                    </div>
            </div>
        )
    }
}