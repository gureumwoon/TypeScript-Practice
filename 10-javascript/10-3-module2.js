import add, { number, print as printMessage } from './10-3-module1.js'
// 가지고 올 때 default는 {}없이 바로 사용이 가능하지만,default가 아닌 아이들은
// {}를 이용해 동일한 이름으로 가져와야 한다.
// 이름을 변경하고 싶으면 위에처럼 as를 이용해라.
console.log(add(1, 2))
printMessage();
console.log(number);

//export되어있는 모든 애들을 데러오겠다 하면
// import * as calculator from './10-3-module1.js'
// console.log(calculator.add(1,2));
// calculator.print();
// 이렇게 사용 가능
// calculator.number;

// 이처럼 module을 이용하면 파일들간에 중복적으로 발생할 수 있는
// 이름 충동을 방지할 수 있고, 서로간의 코드를 분리함으로서
// module성을 높여주고, module간에 재사용성도 높여준다.