import { PageComponent } from "./components/page.js";
class App {
    constructor(appRoot) {
        this.element = new PageComponent();
        this.element.attachTo(appRoot);
    }
}
new App(document.querySelector('.document'));
