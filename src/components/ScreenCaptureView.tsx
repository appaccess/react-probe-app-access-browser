import * as React from 'react';
import { ScreenCaptureStore } from '../stores/ScreenCaptureStore';

interface IProps {
    datePath: string;
    id: string;
}

interface IState {
    screenCap: ScreenCaptureStore;
}

export class ScreenCaptureView extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            screenCap: new ScreenCaptureStore(this.props.datePath, this.props.id),
        }
    }

    render() {
        return (
            <img src={this.state.screenCap.imagePath} />
        )
    }
}

export default ScreenCaptureView;