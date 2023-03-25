{
    // 상속이라는 것은 수직적으로 관계가 형성되는 것을 의미한다.
    // 그리고 이런 상속의 치명적인 문제는 내가 어떤 부모 class의 행동을 수정하게 되면,
    // 이 수정된 사항 때문에 이것이 상속하는 모든 자식 class에 영향을 미칠 수 있는 치명적인
    // 단점이 있다.
    // 그리고 새로운 기능을 도입하려고 할 때 어떻게 상속의 구조를 가져와야 하지? 복잡해지기 시작함.
    // 그리고 제일 큰 문제점은, 타입스크립트에서는 한가지 이상의 부모클래스를 상속할 수가 없다.
    // 이런 상속의 문제점들 때문에 composition을 사용하는 것이 더 좋다.


    // composition -> 구성요소들, 구성이라는 뜻을 의미한다. 우리가 레고를 만들 때 필요한 부품들을 모아서
    // 조립 해나가는 것처럼 이 composition도 필요한 것들을 가져와서 조립 해나가는 것을 말한다.
    // 코드의 재사용을 높여준다.

    // composition의 단점 알아보자

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


    // 싸구려 우유 거품기
    class CheapMilkSteamer {
        private steamMilk(): void {
            console.log('Steaming some milk...🥛')
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            };
        }
    }

    // 설탕 제조기
    class AutomaticSugarMixer {
        private getSugar() {
            console.log('Getting some sugar from jar 🍭');
            return true;
        }
        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar,
            }
        }
    }

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans: number,
            public readonly serialNumber: string,
            private milkFother: CheapMilkSteamer
        ) {
            super(beans)
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.milkFother.makeMilk(coffee);
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        constructor(private beans: number, private sugar: AutomaticSugarMixer) {
            super(beans);
        };
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.sugar.addSugar(coffee);
        }
    }

    class SweerCaffeeLatteMachine extends CoffeeMachine {
        constructor(
            private beans: number,
            private milk: CheapMilkSteamer,
            private sugar: AutomaticSugarMixer
        ) {
            super(beans);
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            const sugaAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugaAdded);
        }
    }

    const machines: CoffeeMaker[] = [
        new CoffeeMachine(16),
        new CoffeeMachine(16),
    ];

    machines.forEach(machine => {
        console.log('----------------------');
        machine.makeCoffee(1)
    })

}