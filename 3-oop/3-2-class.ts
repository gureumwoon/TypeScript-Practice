{
    // class는 관련된 속성들과 함수들을 엮어서 어떤 모양의 데이터가 될 거라는 것을 정의하는 것이다.
    // 그리고 이 정의된 class를 이용해서 실제로 데이터를 넣어서 object를 만들 수 있다.

    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    class CoffeeMaker {
        static BEANS_GRAMM_PER_SHOT: number = 7 // class level
        coffeeBeans: number = 0; // instance (object) level

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        } // 이 class를 가지고 object instance를 만들 때 항상 처음에 호출되는 함수.


        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans)
        }
        // 이런 함수는 이 class 내부에 있는 어떤 속성 값도 필요하지 않기 때문에 static을 붙여주면 됨.

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


    const maker = new CoffeeMaker(32)
    console.log(maker) // {BEANS_GRAMM_PER_SHOT: 7, coffeeBeans: 32} {coffeeBeans: 32}
    const maker2 = new CoffeeMaker(14);
    console.log(maker2) // {BEANS_GRAMM_PER_SHOT: 7, coffeeBeans: 14} {coffeeBeans: 14}

    const maker3 = CoffeeMaker.makeMachine(3);

    // new키워드는 이 class(CoffeeNaker)의 instance를 만든다 ()이 괄호는 생성자를 호출하는 것이다.
    // 그 말은 new와 class 이름을 이용하면 이 class를 이용해서 데이터를 담아서 object를 만들 수 있다.

    // BEANS_GRAMM_PER_SHOT: number = 7은 class에서 정해진 아이다 즉 변하지 않는 애인데
    // 이 CoffeeMaker는 한 가지 샷을 만들 때 7g양의 커피를 사용하고, 이것은 이 class 내부에서 연결된 정보이고
    // 변하지 않는 숫자이다. 그런데 이렇게 멤버 변수로 작성하게 되면 이 class를 이용해서 만드는 object마다 저 숫자가
    // 들어있게 된다. 이처럼 class에서 한 번 정의되어지고 이 class를 이용한 object 사이에서 다 공유가 될 수 있는
    // 이런 애들은 멤버 변수로 두게 되면 object를 만들때마다 중복적으로 데이터가 생성되기 때문에
    // 메모리에 낭비가 될 수 있다. 그래서 이런 애들은 static이라는 키워드를 붙이게 되면
    // class level로 지정이 된다. static을 붙이지 않으면 instance(object)라고 불리는데 instance level이 된다.
    // class level이라고 하는 것은 class와 연결이 되어있기 때문에 object마다 만들어지거나 생성되지 않는다.
    // 그리고 사용할 때는 이 class 안에 있는 this안에 있는 것이 아니라 이 class 자체에 있는 것이기 때문에 this를 쓰지 않고
    // 대신에 class이름을 지정해주어야 한다 (CoffeMaker)
    // 즉, class에 있는 BEANS_GRAMM_PER_SHOT이라는 데이터에 접근하게 되는 거다.
    // 이제 console 출력하면 더이상 BEANS_GRAMM_PER_SHOT이 출력되지 않음.
    // {coffeeBeans: 32} {coffeeBeans: 14}

    // static이란 키워드는 멤버변수 뿐만 아니라 함수에서도 적용이 된다.만약에 constructor를 호출하지 않고
    // 새로운 커피 기계를 만들고 싶다면 makeMachine() 함수.
    // 그럼 외부에서도 이 class를 만들지 않고 CoffeeMaker.makeMachine(3); 이렇게 사용.

    // class level에서 활용하고 싶다면 static을 사용하자.
}


