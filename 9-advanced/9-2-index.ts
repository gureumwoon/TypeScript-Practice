{

    // index 타입을 사용하면 다른 타입에 있는 key에 접근해사
    // 그 key의 value의 타입을 그대로 다시 선언할 수 있다

    const obj = {
        name: 'woony',
    }
    obj.name; // woony
    obj['name']; // woony

    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female';
    };

    type Name = Animal['name'] // string
    const text: Name = 'hello'

    type Gender = Animal['gender']; // 'male' | 'female'

    type Keys = keyof Animal; // Animal에 있는 모든 key의 타입을 Keys로 할당 하는 것이다.
    // 'name' | 'age' | 'gender'
    const key: Keys = 'gender'

    type Person = {
        name: string;
        gender: Animal['gender'];
    };
    const person: Person = {
        name: 'woony',
        gender: 'female'
    }
}