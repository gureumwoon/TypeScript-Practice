{
    // Enum
    // 여러가지 상수 값들을 한곳에 모아서 타입이 보장되고 
    // 이 타입의 값이 변하지 않으니까 조금 더 타입을 안전하게 쓸 수 있도록
    // Enum이라는 타입이 있다.

    // JavaScript
    // 자바스크립트에서 상수를 정의할 때는, 한 번 정해지면 바뀌지 않는 어떤 특정한
    // 고정값을 나타낼 때 이렇게 전부 다 대문자 형태로 사용한다.

    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({ "MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2 })
    const dayOfToday = DAYS_ENUM.MONDAY;

    // TypeScript
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
    enum Days {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    console.log(Days.Tuesday);
    let day: Days = Days.Saturday;
    day = Days.Tuesday
    day = 10;
    console.log(day)

    // enum을 쓰면 정확한 타입이 보장되지 않는다.
    // enum은 충분히 union string literal로 대체되어서 사용이 가능하기 때문에
    // enum을 굳이 쓰지 않고, union 타입을 이용해서 충분히 필요한 것들을 조금 더
    // 타입을 보장 받으면서 쓸 수 있다.
    let dayOfweek: DaysOfWeek = 'Monday';
    dayOfweek = 'Tuesday'
}