{
    /*
    * JavaScript
    * Primitive: number, string, boolean, biginit,symbol,null,undefined
    * Object: function, array...
    */

    // number
    const num: number = -6;

    // string
    const str: string = 'hello'

    // boolean
    const boal: boolean = false;

    // undefined 비었는지 안 비었는지 아직 결정 되지 않음. 또한 undefined말고 어떠한 데이터도 담을 수 X
    let name: undefined // 💩 이런 undefined 타입은 거의 본 적 없음.
    let age: number | undefined // 데이터 타입이 있거나 아직 결정되지 않았거나
    age = undefined;
    age = 1;
    function find(): number | undefined {
        return undefined;
    } // 값을 찾으면 number 못 찾으면 undefined

    // null 비었다고 이미 결정 됨. 얘도 null 말고 어떠한 데이터도 담을 수 X
    let person: null; // 💩 그래서 얘도 단독으로 잘 사용되지 않음.
    person = null
    let person2: string | null // undefined처럼 이렇게 or 형식으로 쓰임.

    // 하지만 보편적으로 데이터|undefined (undefined)으로 많이 쓰임.
    // 값이 있거나 없다는 걸 나타낼 때는 데이터|null이 문맥상으로는 맞다.

    // unknown 알 수 없는 💩
    let notSure: unknown = 0; // 어떤 종류의 데이터가 담길지 알 수 없는 타입이 됨. 그래서 0으로 할당했음에도
    notSure = 'hi'; // 문자를 할당할 수도 있고
    notSure = true; // 다양한 어떤 데이트든 다룰 수 있다.
    // 무슨 타입인지 모르는 상태가 됨. 가능하면 쓰지 않는 것이 좋음.

    // any 어떤 것이든 담을 수 있는 변수 💩
    let anything: any = 0;
    anything = 'hello';

    // void
    function print(): void {
        console.log('hello');
        return; // 아무런 값도 retrun 하지 않으면 void(텅텅 빈)
    }
    let unusable: void = undefined; // 💩 변수에 void 타입 할당은 잘 안 함 undefined 밖에 할당 할 수 없어서

    // never
    function throwError(message: string): never { // 함수에서 절대 return 되지 않을 때 그것을 명시하기 위해 쓰임.
        // message -> server(log)
        throw new Error(message) // 이렇게 error를 던지던지
        while (true) { } // 아니면 이렇게 while 문을 돌리면서 게속 끝나지 않게 코드를 작성해야 한다.
        // return; nevre 타입에서는 절대 다른 것을 return 할 수 없음.
    }
    let neverEnding: never; // 💩 이렇게 변수에다 never타입 쓰는 경우는 없음.

    // objet
    let obj: object; // 원시 타입을 제외한 모든 object 타입을 할당할 수 있다. 배열도 가능
    // 하지만 이 object 타입같은 경우도 범위가 너무 광범위 해서 웬만하면 쓰지 않는 걸 추천 💩
    // 가능하면 구체적으로 object도 어떤 타입인지 명시해서 작성하는 것이 좋다.
    function acceptSomeObject(obj: object) { }
    acceptSomeObject({ name: 'woony' })
    acceptSomeObject({ animal: 'dog' })
}