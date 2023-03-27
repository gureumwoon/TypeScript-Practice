{

    // abstract로 만들어진 class는 이자체는 object를 생성할 수 없는 class고
    // 추상적인 class이다. 그래서 공통적인 기능들이 있다면, 그런 기능들을 다 구현할 수 있고
    // 이걸 구현하는 class마다 달라져야 하는 내용들이 있다면, 그 부분만 abstract 메서드로  정의를 할 수가 있다.
    // 우리가 interface에서 함수의 규격을 정의한 것처럼 abstract 메서드에서는 함수 이름은 뭔지, 어떤 인자를 받아서 어떤 걸 return 하는지
    // 이것들만 정의를 할 수가 있고, 공통적으로 쓰이는 기능들은 내부에서만 필요한 것은 private으로 외부에서 호출할 수 있는 것은 public으로 만들 수 있고, 
    // 이렇게 구현하는 class들마다 달라져야 하는 이 abstract 함수만 이 abstract class를 구현하는 곳에서 구현해주면 된다.
    // 그리고 만약 abstract class를 상속하면서 이걸 구현하지 않으면, 에러메세지를 받을 수 있다.
    // 이렇게 abstract class를 이용하면 조금 더 안전하게 우리가 의도한대로 공통적인 기능들을 수행하고 달라져야 되는 것만 상속하는 class에게
    // 이거 꼭 구현해 하고 강조할 수 있다.
    // 이렇게 상속을 이용할 때 abstract class를 잘 이용할 수가 있다 
    // 그리고 가능하면 너무 수직적으로 굉장히 깊은 상속을 이요하기 보다는 가능하면 composition을 이용하는 것이 더 좋다.
    // 그렇다고 상속을 쓰는 것이 무조건 나쁘다는 건 아니다. 상속을 이용해서 쓰는 라이브러리나 프레임워크들도 많고 또는 프로젝트를 할 때
    // 상속이 굉장히 유용하게 쓰일 수 있다. 그래서 상속을 써야할 때 그리고 상속과 composition을 이용해서 깊은 수직관계를 피하는 방법 이런 것들은
    // 여러 번 프로젝트 또는 문제해결을 하면서 상속과 composition을 여러 번 써보고 어떤 것이 어떤 경우에 더 좋은지 생각하는 힘을 기르는 것이 중요하다.

    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    };


    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    abstract class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7
        private coffeeBeans: number = 0;

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
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

        protected abstract extract(shots: number): CoffeeCup;

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
        protected extract(shots: number): CoffeeCup {
            this.steamMilk();
            return {
                shots,
                hasMilk: true,
            }
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        protected extract(shots: number): CoffeeCup {
            return {
                shots,
                hasSugar: true,
            }
        }
    }

    const machines: CoffeeMaker[] = [
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
    ];
    machines.forEach(machine => {
        console.log('----------------------');
        machine.makeCoffee(1)
    })

}