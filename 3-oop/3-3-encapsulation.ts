{

    // encapsulation 캡슐화는 class를 만들 때 외부에서 볼 수 있는
    // 외부에서 접근할 수 있는 것은 무엇인지, 그리고 내부적으로만 가지고 있어야 하는 데이터는
    // 무엇인지 이런 것들을 결정할 수 있다.
    // 그래서 외부에 노출해도 되는 것은 무엇인지 잘 고려해서 class를 디자인 하는 것이 중요하다.

    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    // 정보를 은닉하는 방법에는
    // public
    // private
    // protected를 이용해서

    // protected -> 나중에 상속을 할 때 외부에서는 접근할 수 없지만 이 class를 상속한
    // 자식 class 에서만 접근이 가능하도록 설정할 수 있다

    // 다양한 level의 정보를 은닉할 수 있다.
    // 따로 작성하지 않으면 모든 것은 public

    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7
        private coffeeBeans: number = 0;

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans)
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        // 이처럼 내부의 상태를 private이라는 비공개 키워드를 이용해서 숨겨놓고
        // 외부에서는 public인 fillCoffeeBeans라는 함수를 이용해서 내부의 상태를 
        // 변경할 수 있도록 만들어 줌.
        // 그리고 이런 함수를 이용하기 때문에 우리가 전달받는 인자가 유효한지 아닌지를
        // 검사함으로서 조금 더 안전성을 높여서 코딩을 할 수가 있게 됨.

        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk: false,
            };
        }

    }


    const maker = CoffeeMaker.makeMachine(32);
    // maker.coffeeBeans = 3;
    // maker.coffeeBeans = -32; // invalid

    maker.fillCoffeeBeans(32)

    // 외부에서 변경되길 원치 않아 -> private 사용
    // 이렇게 설정하는 것은 유효하지 않음.
    // 이렇게 제한사항이 없기 때문에 외부에서 나의 object 상태를 유효하지 않은 상태로 만들 수 있는
    // 위험한 상황이다.
    // encapsulation을 이용해서 외부에서 보이면 안 되는 설정하면 안 되는 것들을
    // 가려보도록 할 거다.

}