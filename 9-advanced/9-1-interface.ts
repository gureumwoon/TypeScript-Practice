type PositionType = {
    x: number;
    y: number;
};
interface PositionInterface {
    x: number;
    y: number;
}

// type alias와 interface는 둘 다  object로 정의하고 타입을 할당할 수 있다.⭐
const obj1: PositionType = {
    x: 1,
    y: 1,
};
const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
};

// 또 둘 다 class에서 구현이 가능하다.⭐
class Pos1 implements PositionType {
    x: number;
    y: number;
}
class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
}

// Extends(확장) 또한 가능하다.
// interface는 상속을 통해서 확장을 할 수가 있다.
interface ZPositionInterface extends PositionInterface {
    z: number;
}

// type은 intersection을 이용해서 두가지를 묶은 타입 만들 수 있다.
type ZPositionType = PositionType & { z: number };

// 이렇게 interface와 type alias는 굉장히 비슷하다.
// 타입스크립트의 초창기에는 이렇게 type을 이용해 확장을 하는 것은 불가능했다.
// type을 이용해서 할 수 없는 것들이 많았다.

// 결합은 interface만 가능하다. 그 말은 interface를 한 번 정의 했음에도 불구하고
// 나중에 뒤에 다시 한 번 PositionInterface라는 동일한 이름의 interface에 z:number라는 것을
// 추가 할 수 있다.

interface PositionInterface {
    z: number;
}

// 그러면 이제 PositionInterface의 타입을 받는 곳에서는 두 가지가 합쳐진 것을 이용해야 한다.
// x,y,z를 이용해야 한다는 것이다.

// 결론은 다른 곳에 한 번 두 번 정의가 됐고, 각각 정의한 것을 합해서
// 사용하는 사람들 이용을 해야 하는 것이다. type은 이렇게 할 수 있는 방법이 없다.

// 대신 Type만 가능한 것들이 있다.😀
// Type aliases can use computed properties
type Person = {
    name: string,
    age: number,
}

type Name = Person['name']; // string

type NumberType = number;
type Direction = 'left' | 'right';

