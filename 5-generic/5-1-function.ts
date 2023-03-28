{

    // 제네릭을 이용하면, 사용하는 사람이 어떤 타입인지 결정할 수 있고, 이렇게 유연하지만
    // 타입이 보장받을 수 있다. 컴파일 시간때(우리가 코딩을 할 때) 타입을 보장받을 수 있다.

    function checkNotNull(arg: number | null): number {
        if (arg == null) {
            throw new Error('not valid number!')
        }
        return arg;
    }

    function checkNotNullAnyBad(arg: any | null): any {
        if (arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }
    const result = checkNotNullAnyBad(123);

    function checkNotNull2<T>(arg: T | null): T {
        if (arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }
    const number = checkNotNull2(123);
    const boal: boolean = checkNotNull2(true);

}