console.log(this);

function simpleFunc() {
    console.log(this);
}
window.simpleFunc();
console.clear();

class Counter {
    count = 0;
    increase = function () {
        console.log(this)
    }
}
const counter = new Counter();
counter.increase(); // counter에서 increase를 호출했으니까 this는 Counter class가 됨.
//const caller = counter.increase;
// object와 함수의 관계의 this를 묶어주려면 bind 이용해야함.
const caller = counter.increase.bind(counter);
caller(); // undefined

// 원래 counter에 있는 이 increase안에 있는 this라는 것은 이 Counter라는 class를 가리키고
// 있었으나, counter에 increase 포인터를 caller라는 변수로 할당했기 때문에 여기서 this의 정보를
// 잃어버리게 됐다.
// let과 const로 선언한 변수는 window에 등록되어져 있지 않으므로 이 caller를 호출하는 것은
// window가 아니라 그 어떤 object도 아니기 때문에 undefined을 호출하는 것과 마찬가지이다.
// 그래서 this가 undefined이라 나오는 것이다.

class Bob {

}
const bob = new Bob();
bob.run = counter.increase;
bob.run();

// this는 부르는 게 무엇인지에 따라 달라질 수 있으므로 한 곳으로 object를 연결하고 싶으면
// bind라는 함수를 이용해서 묶어줘야(연결해줘야) 함.
// 다른 방법으로는 이렇게 일일히 binding 해주지 않아도 되는 방법이 있는데
// 방법은 화살표 함수 이용하기. (선언될 당시의 문맥, 그 당시의 스코프의 this context를 유지함.)