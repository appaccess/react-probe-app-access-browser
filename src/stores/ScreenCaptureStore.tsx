import { Screen } from '../types/Screen';

export class ScreenCaptureStore  {
    imagePath: string;
    viewHierarchyPath: string;
    screen: Screen;

    constructor(datePath: string, id: string) { //path should be of format 'YYYY.MM'
        this.imagePath = `../assets/${datePath}/screenshots/${id}`;
        this.viewHierarchyPath = `../assets/${datePath}/views/${id}`;
        this.screen = this.getJSON(this.viewHierarchyPath);
    }


    // THIS METHOD IS NONFUNCTIONAL
    getJSON(path: string) {
        // TODO: figure out how to parse JSON to create instance of interface
        let viewPath = JSON.stringify(require(path));
        console.log(viewPath);

        let view: Screen = JSON.parse(viewPath);

        console.log(view.bounds);
        return view;
    }
}

export default ScreenCaptureStore;