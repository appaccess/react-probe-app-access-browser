import * as React from 'react';

import { ScreenCaptureStore } from '../stores/ScreenCaptureStore';

interface IProps {
    screenCap: ScreenCaptureStore;
}

interface IState {
}

export class ScreenCaptureView extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <img src={this.props.screenCap.imagePath} />
        )
    }
}

export default ScreenCaptureView;