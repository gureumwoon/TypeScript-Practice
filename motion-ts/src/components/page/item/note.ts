import { BaseComponent } from "../../component.js";

export class NoteComponent extends BaseComponent<HTMLElement> {
    constructor(title: string, content: string) {
        super(`<section class="note">
                    <h2 class="page-item__title note-title"></h2>
                    <p class="note-content"></p>
               </section>`);

        const titleElement = this.element.querySelector('.note-title')! as HTMLHeadElement;
        titleElement.textContent = title;

        const contentElement = this.element.querySelector('.note-content')! as HTMLParagraphElement;
        contentElement.textContent = content;
    }
}