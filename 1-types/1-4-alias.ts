{
    // Type Alisaes 새로운 타입을 내가 직접 정의할 수 있음.

    type Text = string;
    const name: Text = 'woon';
    const address: Text = 'korea'
    type Num = number;
    type Student = {
        name: string,
        age: number;
    };
    const student: Student = {
        name: 'woon',
        age: 22
    };

    // Stirng Literal Types

    type Name = 'name';
    let woonyName: Name;
    // woonyName ='d' 다른 건 할당 안 됨. 에러남 오직 'nqme'만 할당 가능.
    woonyName = 'name'
    type JSON = 'json'
    const json: JSON = 'json'

    type Boal = true;
    const isCat: Boal = true;
}