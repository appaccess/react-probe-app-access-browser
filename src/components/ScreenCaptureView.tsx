import * as React from 'react';

import { ScreenCaptureStore } from '../stores/ScreenCaptureStore';

interface IProps {
    screenCap: ScreenCaptureStore;
}

interface IState {
<<<<<<< HEAD
    
=======
>>>>>>> a6eb2c4f1a3bb75e1601d723d751b1357c76baf7
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