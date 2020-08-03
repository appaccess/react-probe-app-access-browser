//import { Screen } from '../types/Screen';

export class ScreenCaptureStore  {
    imagePath: string;
    viewHierarchyPath: string;
    //screen: Screen;
    view: any;
    screenshot: any;

    constructor(datePath: string, id: string, view: any, screenshot: any) { // datePath should be of format 'YYYY.MM', second 2 params are for hardcoded imports
        this.imagePath = `../assets/${datePath}/screenshots/${id}.png`;
        this.viewHierarchyPath = `../assets/${datePath}/views/${id}.json`;
        //this.screen = this.getJSON(this.viewHierarchyPath);
        this.view = view;
        this.screenshot = screenshot;
    }


// imports instead of file systems
    //getJSON(path: string) {
        // TODO: figure out how to import path of json file dynamically
        //let screenFile = import(path);
        //let view: Screen;

        //return view;
    //}
/*
    getJSON(view: any) {
        
    }
    */
}


export default ScreenCaptureStore;