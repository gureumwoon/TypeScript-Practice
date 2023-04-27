import { BaseComponent } from "../../component.js";
import { MedialData } from "../dialog.js";

export class MediaSectionInput extends BaseComponent<HTMLElement> implements MedialData {
    constructor() {
        super(`<div>
                    <div class="form-container">
                        <label for="title">Text</label>
                        <input type="text" id="title">
                    </div>
                    <div class="form-container">
                        <label for="url">URL</label>
                        <input type="text" id="url">
                    </div>
                </div>`);
    }

    get title(): string {
        const element = this.element.querySelector('#title')! as HTMLInputElement;
        return element.value;
    }

    get url(): string {
        const element = this.element.querySelector('#url')! as HTMLInputElement;
        return element.value;
    }
}