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
}