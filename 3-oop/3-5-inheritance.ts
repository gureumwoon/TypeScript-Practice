{

    // 상속을 잘 이용하면 공통적인 기능을 그대로 재사용 하면서 이 자식
    // class에서만 좀 더 자식 class에 특화된 기능들을 할 수 있고, 추가할 수도 있다.
    // 그리고 super라는 키워드를 이용해서 부모 class에 있는 함수들을 호출하거나 접근 할 수도 있다.

    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };


    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    // 인터페이스를 구현할 때는 implements라는 키워드를 써야 해
    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7
        private coffeeBeans: number = 0;

        constructor(coffeeBeans: number) {
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

    // 다른 class를 상속할 때는 extends 키워드를 사용해야 함.
    // 상속한 class에서 좀 더 다른 동작을 하고 싶다면, 자식 class에서
    // 부모 class에 있는 함수를 덮어 씌울 수가 있다. 이것을 오버라이팅이라고 함.
    class CaffeLatteMachine extends CoffeeMachine {
        // 자식 class에서 생성자 함수를 사용하려거든 꼭 super를 사용해야 된다.
        // 그래서 자식 class에서 생성자를 따로 구현하려는 경우에는 부모의 생성자도
        // 호출해줘야 되고, 생성자는 따로 함수가 아니기 때문에, super()이렇게 super다음에 함수를 쓰면 된다.
        constructor(beans: number, public readonly serialNumber: string) {
            super(beans)
        }
        private steamMilk(): void {
            console.log('Steaming some milk...🥛')
        }
        makeCoffee(shots: number): CoffeeCup {
            // 부모에서 했던 커피를 만드는 절차를 다 이용하고 싶다면,
            // (자식에서 부모에 있는 함수를 이용하고 싶다면)
            // super라는 것을 이용하면 바로 상속하는 부모에 있는 함수를 호출할 수가 있다.
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true,
            };
        }
    }

    const machine = new CoffeeMachine(23);
    const latteMachine = new CaffeLatteMachine(23, 'ssss');
    const coffee = latteMachine.makeCoffee(1);
    console.log(coffee);
    console.log(latteMachine.serialNumber)

}