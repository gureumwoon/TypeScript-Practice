{
    type Video = {
        title: string;
        author: string;
    };
    // [1,2].map(item => item * item); // [1,4]
    // 이것과 마찬가지로 map type을 활용하면 기존의 타입을 다른 형태호 변환할 수 있다.

    // 기존에 있는 T 오브젝트라는 타입에 모든 key들을 빙글빙글 돌면서
    // T 타입에 있는 그 키에 해당하는 value의 타입을 다시 정의한다.
    type Optional<T> = {
        [P in keyof T]?: T[P] // for ... in 처럼 key를 빙글빙글 돌 수 있음.
    };

    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P];
    };
    type VideoOptional = Optional<Video>;

    // map 타입을 이용하면 재사용성이 높아진다. 그래서 Video타입뿐만 아니라 다른 타입이 있다면👇

    type Animal = {
        name: string;
        age: number;
    }
    type AnimalOption = {

    } // or
    const animal: Optional<Animal> = {
        age: 15,
    }
    animal.age = 20;

    const video: ReadOnly<Video> = {
        title: 'hi',
        author: 'woony'
    }

    // map 타입을 이용하면 기존의 타입에서 다른 타입으로 성질을 변화할 수 있다.


    // type VideoOptional = {
    //     title?: string;
    //     author?: string;
    // };
    // type VideoReadOnly = {
    //     readonly title: string;
    //     readonly author: string;
    // }

    // 기존에 주어진 T타입의 key를 빙글 돌면서 기존의 value타입을 쓰거나 null이 가능하도록 만드는 타입이다.
    type Nullable<T> = { [P in keyof T]: T[P] | null };
    const obj2: Nullable<Video> = {
        title: null,
        author: null,
    }
}