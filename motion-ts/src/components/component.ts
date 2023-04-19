export interface Component {
    attachTo(parent: HTMLElement, position?: InsertPosition): void;
}

/*
* Encapsulate the HTML element creation
* BaseComponent는 HTML element 만드는 것을 캡슐화 한다.
*/

export class BaseComponent<T extends HTMLElement> implements Component {
    protected readonly element: T;

    constructor(htmlString: string) {
        const template = document.createElement('template');
        template.innerHTML = htmlString;
        this.element = template.content.firstElementChild! as T;
    }

    attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
        parent.insertAdjacentElement(position, this.element)
    }
}