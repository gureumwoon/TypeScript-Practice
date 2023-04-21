import { BaseComponent } from "../../component.js";

export class NoteComponent extends BaseComponent<HTMLElement> {
    constructor() {
        super(`<section class="note">
                    <p class="note-content">this is NoteComponent!!</p>
               </section>`)
    }
}