import { PageComponent } from "./components/page.js"

class App {
    private readonly element: PageComponent;
    constructor(appRoot: HTMLElement) {
        this.element = new PageComponent();
        this.element.attachTo(appRoot)
    }
}

new App(document.querySelector('.document')! as HTMLElement)