{
    // Union Types: OR
    // 발생할 수 있는 모든 케이스 중에 하나만 할당할 수 있을 때 쓰면 좋음
    // 활용도 매우 높음.

    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }
    move('up');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;

    // function: login -> success, fail

    type SuccessState = {
        response: {
            body: string;
        };
    };

    type FailState = {
        reason: string;
    };

    type LoginState = SuccessState | FailState

    function login(id: string, password: number): LoginState {
        return {
            response: {
                body: 'logged in!',
            },
        };
    }

    // printLoginState(state: LoginState)
    // successs -> :)
    // fail -> :(

    function printLoginState(state: LoginState) {
        if ('response' in state) {
            console.log(`:) ${state.response.body}`)
        } else {
            console.log(`:( ${state.reason}`)
        }
    }

}