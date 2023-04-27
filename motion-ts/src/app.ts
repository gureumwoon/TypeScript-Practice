import { Component } from "./components/component.js";
import { InputDialog } from "./components/dialog/dialog.js";
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import { TextSectionInput } from "./components/dialog/input/text-input.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { Composable, PageComponent, PageItemComponent } from "./components/page/page.js"

class App {
    private readonly page: Component & Composable;
    constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot)

        // const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        // this.page.addChild(image);

        // const video = new VideoComponent('Video Title', 'https://www.youtube.com/watch?v=5ch94AaPZRQ');
        // this.page.addChild(video);

        // const note = new NoteComponent('Note Title', 'Note Content')
        // this.page.addChild(note);

        // const todo = new TodoComponent('Todo Title', 'Todo Content')
        // this.page.addChild(todo);

        const imageBtn = document.querySelector('#btn-image')! as HTMLButtonElement;
        imageBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const mediaInputSection = new MediaSectionInput();

            dialog.addChild(mediaInputSection);
            dialog.attachTo(dialogRoot)

            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot)
            });

            dialog.setOnSubmitListener(() => {
                const image = new ImageComponent(mediaInputSection.title, mediaInputSection.url);
                this.page.addChild(image);
                dialog.removeFrom(dialogRoot)
            });
        });

        const videoBtn = document.querySelector('#btn-video')! as HTMLButtonElement;
        videoBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const mediaInputSection = new MediaSectionInput();

            dialog.addChild(mediaInputSection);
            dialog.attachTo(dialogRoot)

            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot)
            });

            dialog.setOnSubmitListener(() => {
                const video = new VideoComponent(mediaInputSection.title, mediaInputSection.url);
                this.page.addChild(video);
                dialog.removeFrom(dialogRoot)
            });
        });

        const noteBtn = document.querySelector('#btn-note')! as HTMLButtonElement;
        noteBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const textInputSection = new TextSectionInput();

            dialog.addChild(textInputSection);
            dialog.attachTo(dialogRoot)

            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot)
            });

            dialog.setOnSubmitListener(() => {
                const note = new NoteComponent(textInputSection.title, textInputSection.body);
                this.page.addChild(note);
                dialog.removeFrom(dialogRoot)
            });
        });

        const todoBtn = document.querySelector('#btn-task')! as HTMLButtonElement;
        todoBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const textInputSection = new TextSectionInput();

            dialog.addChild(textInputSection);
            dialog.attachTo(dialogRoot)

            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot)
            });

            dialog.setOnSubmitListener(() => {
                const todo = new TodoComponent(textInputSection.title, textInputSection.body);
                this.page.addChild(todo);
                dialog.removeFrom(dialogRoot)
            });
        });
    }
}

new App(document.querySelector('.document')! as HTMLElement, document.body)