interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
}

type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
}

class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;

    constructor(private capacity: number) { }
    get size() {
        return this._size;
    }
    push(value: string) {
        if (this.size === this.capacity) {
            throw Error('Stack is full!');
        }
        const node: StackNode = { value, next: this.head };
        this.head = node;
        this._size++;
    }
    pop(): string {
        // null은 undefined이 아니기 때문에 예상치 못하게 코드가 통과가될 수 있음(실시간 에러 발생 가능함).
        // 그래서 head가 null인지 아닌지 체크하면 null과 undefined은 똑같다 그렇기 때문에 null로 체크하면 null인 경우
        // undefined인 경우 두가지 경우가 다 걸러질 수 있기 때문에 null로 검증함
        // null과 undefined은 엄연히 다른 타입임 그래서 엄격한 타입체크를 하게되면 다르지만, ==를 이용해서 확인하면
        // null과 undefined은 동일하다고 간주됨. null == undefined null !== undefined
        if (this.head == null) {
            throw new Error('Stack is empty!')
        }
        const node = this.head;
        this.head = node.next;
        this._size--;
        return node.value;
    }

}

const stack = new StackImpl(10);
stack.push('woony1')
stack.push('bob2')
stack.push('steve3')
while (stack.size !== 0) {
    console.log(stack.pop())
}