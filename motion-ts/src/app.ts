import { ImageComponent } from "./components/page/item/image.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js"

class App {
    private readonly page: PageComponent;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot)

        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        image.attachTo(appRoot, 'beforeend')

        const video = new VideoComponent('Video Title', 'https://www.youtube.com/embed/m34DPnRUfMU" title="YouTube video player');
        video.attachTo(appRoot, 'beforeend')
    }
}

new App(document.querySelector('.document')! as HTMLElement)