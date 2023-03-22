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

    class User {
        // private firstName: string;
        // private lastName: string;
        // fullName: string;
        get fullName(): string { // get 키워드를 쓰명 이렇게 함수 형태가 되지만 접근할 때는 함수가 아니라 멤버 변수에 접근 하는 것 처럼 작성해야 함.
            return `${this.firstName} ${this.lastName}`;
        }
        private internalAge = 4;
        get age(): number {
            return this.internalAge;
        }
        set age(num: number) {
            if (num < 0) {

            }
            this.internalAge = num;
        }

        // constructor로 전달되어 온 것이 this.firstName으로 설정이 되고, lastName으로 전달되어 온 것이 private this.lastName으로 설정 됨.
        constructor(private firstName: string, private lastName: string) {
            // this.firstName = firstName;
            // this.lastName = lastName;
            // this.fullName = `${firstName} ${lastName}`
            // fullName이 설정된 뒤로 firstName이나 lastName이 변경 되어도 다시 fullName이 계산되지 않고
            // 한 번 할당되면 계속 그대로 지정되어져 있음. 이럴 경우에 getter가 유용함.
        }
    }
    const user = new User('Steve', 'Jobs');
    user.age = 6;
    console.log(user.fullName)

    // 1. 이처럼 setter와 getter는 일반변수(멤버변수)처럼 사용이 가능하지만 어떠한 계산을 해야할 때
    // 조금 더 유용하게 쓸 수 있다.
    // 2. 그리고 한 번 생성자에 전달된 이름은 변경할 수가 없으면 외부에서 변경이 불가능 하도록 private이라고
    // 설정할 수 있다.
    // 3. 그리고 class를 만들 때, 저렇게 private이라고 설정을 하고, constructor에서도 전달하고,이런 게 굉장히
    // 번거롭다. 이걸 간단하게 해볼 수 있는데, 생성자에(constructor) 접근제어자(private)을 설정 해두면 바로 멤버변수로
    // 설정이 된다.
    // 4. user에 internalAge는 접근할 수 없지만, age라는 멤머변수처럼 보이지만 사실 getter와 setter를 이용한 이 age를 통해서
    // 6으로 지정하게 되면, setter가 호출이 되면서 결국 내부적으로는 internalAge라는 멤버변수를 전달된 6으로 업데이트 하게 됨.
    // 그래서 일반 변수에는 우리가 바로 설정할 수 있었지만, 이렇게 getter와 setter를 쓰면 좀 더 다양한 연산을 할 수 있고, 그리고 전달된 숫자가
    // 정확한지에 대해서 유효성 검사도 해볼 수 있다.
}