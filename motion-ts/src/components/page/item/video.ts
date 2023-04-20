import { BaseComponent } from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement>{
    constructor(title: string, url: string) {
        super(`<section class="video">
                  <div class="video-holder">
                    <iframe class="video-thumbnail"></iframe>
                  </div>
                  <p class="video-title"></p>
               </section>`);
        const videoElement = this.element.querySelector('.video-thumbnail')! as HTMLIFrameElement;
        videoElement.src = url;
        videoElement.title = title;

        const titleElement = this.element.querySelector('.video-title')! as HTMLParagraphElement;
        titleElement.textContent = title;
    }
}