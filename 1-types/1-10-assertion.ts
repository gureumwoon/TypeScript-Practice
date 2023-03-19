{
    // 가끔씩 타입을 확인할 때, 타입을 강요할 때가 있다.
    // 그럴 때 Type Assertion에 관한 것들을 써야 함.

    // Type Assertions 💩

    // JS는 타입이 없기 때문에, 어떤 값을 return 하는지 시스템적으로는 컴파일은 잘 모른다.
    // 그래서 any 타입이겠지 하지만 이 함수는 분명히 string을 return한다. 왜냐, string 관련 함수니까.
    // 이처럼 JS이기 때문에 retrun되는 타입이 타입스크립트는 전혀 알 수 없지만, 내부적으로는 항상 문자열을
    // return 하는 함수가 있다고 가정해보자

    function jsStrFunc(): any {
        return 'hello'
    }
    // 여기서 결과값을 jsStrFunc 함수를 호출한 다음에 이 return하는 값을
    // result에 할당하게 되고 결국 이 result는 hello라는 값을 가지게 된다.
    const result = jsStrFunc();
    // 그렇다면 문자열이기 때문에 문자의 길이가 얼마인지 알고싶어서 length를 쓰고자 한다.
    // 하지만 TS는 result라는 것은 any타입이기 때문에 문자열 타입이 아니라서
    // 문자열 타입에서 이용 가능한 api를 사용할 수 없다. 
    // 하지만 우리는 함수에서 문자열을 return한다는 것을 정확하게 안다.
    // 그럴 때 Type Assertion을 사용할 수 있다.
    console.log((result as string).length)

    // 반대로 나는 문자열이라고 완전히 장담했는데 실제로 함수에서 숫자를 return 했다면
    // 그래도 코드를 작성하는 시점에서 에러가 나지 않는다.
    // 하지만 이 코드를 실행하는 순간 undefined이 뜬다.
    // 이처럼 Type Assertion은 내가 정말정말 장담할 때만 써야한다.
    // Type Assertion은 as라는 키워드를 사용해도 되고, 
    console.log((<string>result).length) // 이렇게 사용해도 돼

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)) // 😱

    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers();
    // numbers는 number일 수도 있지만 undefined일수도 있기 때문에 push를 쓰면 에러가 난다.
    // numbers.push(2) 😱
    // 하지만 난 이게 무조건 숫자 배열일거란 확신이 있다면 변수 뒤에 !를 쓸 수 있다.
    numbers!.push(2); // 진짜 확실히 장담한다는 뜻.
    // 아니면 함수를 호출한 다음 !를 붙여도 돼
    // const numbers = findNumbers()!; 이렇게.

}