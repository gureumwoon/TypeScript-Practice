interface Employee {
    pay(): void;
}

class FullTimeEmployee implements Employee {
    pay() {
        console.log(`full time!!`);
    }
    workFullTime() {

    }
}

class PartTimeEmployee implements Employee {
    pay() {
        console.log(`part time!!`);
    }
    workPartTime() {

    }
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩
function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
}

// 이렇게 제네릭이긴 제네릭인데 이 타입은 Employee를 확장한 애들만 된다는 뜻.
function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
}

const woony = new FullTimeEmployee();
const ellie = new PartTimeEmployee();
woony.workFullTime();
ellie.workPartTime();

const woonyAfterPay = payBad(woony);
const ellieAferPay = payBad(ellie);

const obj = {
    name: 'woony',
    age: 20,
}

const obj2 = {
    animal: '🐶',
}

console.log(getValue(obj, 'name')); // woony
console.log(getValue(obj, 'age')); // 20
console.log(getValue(obj2, 'animal')); // 🐶

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}