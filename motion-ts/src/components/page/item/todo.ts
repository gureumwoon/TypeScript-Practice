import { BaseComponent } from "../../component.js";

export class TodoComponent extends BaseComponent<HTMLElement> {
    constructor(title: string, todo: string) {
        super(`<section class="todo">
                 <h2 class="page-item__title todo-title"></h2>
                 <input type="checkbox" id="todo-checkbox" />
                 <label for="todo-checkbox" class="todo-label"></label>
               </section>`)
        const titleElement = this.element.querySelector('.todo-title')! as HTMLHeadElement;
        titleElement.textContent = title;

        const todoElement = this.element.querySelector('.todo-label')! as HTMLInputElement;
        todoElement.insertAdjacentText('beforeend', todo);
    }
}