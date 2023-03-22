{

    // 추상화(abstraction)는 interface를 굉장히 간단하고 심플하게 만듦으로서
    // 사용하는 사람이 간편하게 많은 생각을 하지 않아도 심플하게 사용할 수 있도록 도와준다.
    // abstraction을 할 수 있는 방법으로는 여러가지 방식이 있다. 그리고 언어마다 할 수 있는 레벨이
    // 달라진다.
    // 앞에서 배운 접근제어자를 통해서 encapsulation을 통해서 충분히 추상화를 할 수 있고
    // 또 interface를 통해서 추상화를 할 수 있다.
    // interface가 없는 프로그래밍 언어도 있어서 정보은닉을 통해서도 충분히 추상화를 할 수 있다

    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }

    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7
        private coffeeBeans: number = 0;

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans)
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        clean() {
            console.log('cleaning the machine...');
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`)
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat(): void {
            console.log('heating up...🔥')
        }

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots...`);
            return {
                shots,
                hasMilk: false,
            };
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }

    }


    // const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    // maker.fillCoffeeBeans(32)
    // maker.makeCoffee(2);
    // // 이렇게 coffeMachine이라는 타입으로 이 object를 받게되면 이 object안에 있는 public함수들에
    // // 다 접근 가능하지만


    // const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
    // maker2.fillCoffeeBeans(32)
    // maker2.makeCoffee(2);
    // maker2.clean()
    // // 이렇게 interface로 다시 타입을 제한해서 받게 되면 이 interface에서 정의된 애들만
    // // 사용할 수 있다.

    class AmateurUser {
        constructor(private machine: CoffeeMaker) { }
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee)
        }
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker) { }
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee)
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }

    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    const amateur = new AmateurUser(maker);
    const pro = new ProBarista(maker);
    pro.makeCoffee();

    // 동일한 object의 instance일지라도 이 object는 두 가지의 interface를 구현하기 때문에, 
    // AmateurUser와ProBarista는 coffeeMachine을 받아오는 것이 아니라 CoffeeMaker를 생성자에서 받아오고
    // CommercialCoffeeMaker라는 interface를 생성자에서 받아오기 때문에 이 interface에서 규약된 class보다는 좀 더
    // 좁은 범위의 interface에서 규약된 그런 함수들만 접근이 가능한 걸 알 수 있다.

    // 이처럼 AmateurUser나ProBarista는 이 interface가 어떻게 구현되어 있는지 얼마나 많음 함수들이 있는지
    // 신경쓰지 않고 interface에 규약된 함수들만 이용해서 이 생성된 object와 의사소통을 할 수 있다.
    // 그렇기 때문에 사용하는 사용자들은 이 class에 다른 복잡한 기능을 알 필요도 없고 이 interface만 어떻게 사용하면
    // 될 지 그것만 알면 된다.

}