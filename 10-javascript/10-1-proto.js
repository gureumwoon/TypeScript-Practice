const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.Prototype === y.Prototype); // true
// true라고 나오는 이유는 x와 y는 동일한 object의 prototype을 상속하고 있기 때문. 

// JS에서 모든 object는 Object라는 prototype을 상속한다.
// console에 나와있는 prototype안을 보면 Object에서 쓸 수 있는
// 기본적인 함수가 있는 걸 확인해볼 수 있다.

const array = [];
console.log(array); //[[Prototype]]: Array(0)
// Array라는 prototype을 가지고 있는 걸 확인할 수 있다. 
// 그래서 prototype을 열어보면 array안에 있는 기본적인 함수들이
// 다 정리되어져 있기 때문에 아무런 것도 하지 않았음에도 불구하고 
array.length
array.concat
array.every
array.pop()
array.push(1) //1
array //[1]
// 이런 것들이 가능함.

// Array라는 prototype안에는 Object라는 prototype도 가지고 있다.
// 여기서 어떤 걸 확인할 수 있나?
// array라는 이 변수의 object는 Array를 상속하고 이 Array라는 prototype은
// Object를 상속한다. 그래서 JS에 있는 모든 Object들은 Object라는 Prototype을 가지고 있게 되는 거다.

console.clear()

// constructor function
function CoffeMachine(beans) {
    this.beans = beans;
    // Instance member level
    // this.makeCoffee = (shots) => {
    //     console.log('makeing...☕');
    // };
}
// Prototype member level
CoffeMachine.prototype.makeCoffee = (shots) => {
    console.log('makeing...☕');
}
const machine1 = new CoffeMachine(10);
const machine2 = new CoffeMachine(20);
console.log(machine1)
console.log(machine2)
// 이 constructor function은 Object 상속하고 있다.
// 그리고 beans라는 공통적인 property도 있다.

//machine1과 machine2라는 아이는 CoffeeMachine이라는 이 proto를 가지고
// 상속하고 있고, 그리고 결국 CoffeeMachine이라는 것은 Object proto를 상속
// 가지고 있다. 

function LatteMachine(milk) {
    this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeMachine.prototype);
// 이렇게 하고 출력 해보면 이제 LatteMachine은 CoffeeMachine을 상속하고
// CoffeeMachine은 Object를 상속하는 걸 볼 수 있음.
// 그렇기 때문에 LatteMachine에서도 우리가 makeCoffee라는 함수를 이용할 수 있게 됨.
const latteMachine = new LatteMachine(123);
console.log(latteMachine)
latteMachine.makeCoffee()

// Prototype을 이용해서 상속을 구현할 수 있다.
// 그래서 Prototype은 무엇이다?
// JS에서 객체지향 프로그래밍, 상속을 하기 위해서 쓰이는 것이다.
// 그리고 코드를 재사용 하기 위해서 만들어진 것이다.