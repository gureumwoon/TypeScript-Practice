{

    // 다형성을 이용하면 한가지의 class나 또는 한가지의 interface를 통해서 다른
    // 방식으로 구현한 class를 만들 수 있다
    // 다형성의 장점은 내부적으로 구현된 다양한 class들이 한가지의 interface를 구현하거나
    // 또는 동일한 부모 class를 상속했을 때 동일한 함수를 어떤 class인지 구분하지 않고
    // 공통된 API를 호출할 수 있다는 것이 큰 장점이다.

    // 이처럼 다형성은 하나의 interface나 또는 부모의 class를 상속한 자식 class들이 interface와 부모 class에 있는
    // 함수들을 다른 방식으로 다양하게 구성함으로서 조금 더 다형성을 만들어 볼 수 있는 것을 말한다.

    // 그리고 이처럼 interface와 부모class에 있는 동일한 함수 API를 통해서 각각의 구현된 자식 class의 내부 구현사항을
    // 신경쓰지 않고 약속된 한가지의 API를 호출함으로서 사용하는 사람도 간편하게 다양한 기능들을 활용할 수 있도록 도와준다.

    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    };


    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

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

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans: number, public readonly serialNumber: string) {
            super(beans)
        }
        private steamMilk(): void {
            console.log('Steaming some milk...🥛')
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true,
            };
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return {
                ...coffee,
                hasSugar: true,
            };
        }
    }

    const machines: CoffeeMaker[] = [
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
    ];
    machines.forEach(machine => {
        console.log('----------------------');
        machine.makeCoffee(1)
    })

}