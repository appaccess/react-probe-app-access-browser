import { Screen } from '../types/Screen';

export class ScreenCaptureStore {
    imagePath: string;
    viewHierarchyPath: string;
    view: Screen; // view holds json information
    screenshot: any; // screenshot holds picture information

    // datePath should be of format 'YYYY.MM'
    constructor(datePath: string, id: string, view: any, screenshot: any) {
        this.imagePath = `../assets/${datePath}/screenshots/${id}.png`;
        this.viewHierarchyPath = `../assets/${datePath}/views/${id}.json`;
        this.view = view;
        this.screenshot = screenshot;
    }
}

export default ScreenCaptureStore;