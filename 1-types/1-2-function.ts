{
    // // Javascript 💩
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }

    // // TypeScript ✨
    // function add(num1: number, num2: number): number {
    //     return num1 + num2;
    // }

    // // Javascript 💩
    // function jsFetchNum(id) {
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100)
    //     })
    // }

    // // TypeScript ✨
    // function FetchNum(id: string): Promise<number> {
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100)
    //     })
    // }

    // JavaScript ✨ => TypeScript
    // Optional parameter
    function printName(firstName: string, lastName?: string) {
        // ? 는 전달 받을 수도 있고 안 받을 수도 있는 거임.
        console.log(firstName)
        console.log(lastName)
    }
    printName('woony', 'kim')
    printName('woony')

    // Default parameter
    function printMessage(message: string = 'default message') {
        // 아무것도 전달하지 않아도 기본 메세지를 출력하게끔 하고싶을 때 이렇게 default 값을 지정해줄 수 있다.
        console.log(message);
    }
    printMessage(); // 그럼 이렇게 아무것도 전달하지 않아도 자발적으로 default message를 출력함.

    // Rest parameter
    function addNumbers(...numbers: number[]): number {
        // 전달하는 모든 숫자들을 배열 형태로 받아옴.
        return numbers.reduce((a, b) => a + b)
    }
    console.log(addNumbers(1, 2))
    console.log(addNumbers(1, 2, 3, 4))
    console.log(addNumbers(1, 2, 3, 4, 5, 0))
    // 갯수에는 상관없이 동일한 타입의 데이터를 함수 인자로 전달할 때 이렇게 rest parameter를 사용할 수 있다.
}
