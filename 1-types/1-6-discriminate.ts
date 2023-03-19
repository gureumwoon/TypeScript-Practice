{
    // 차별화 할 수 있는 구별할 수 있는 이라는 뜻.

    type Direction = 'left' | 'right' | 'up' | 'down';
    function move2(direction: Direction) {
        console.log(direction);
    }
    move('up');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;

    // function: login -> success, fail

    type SuccessState = {
        result: 'success';
        response: {
            body: string;
        };
    };

    type FailState = {
        result: 'fail';
        reason: string;
    };

    type LoginState = SuccessState | FailState

    function login2(id: string, password: number): LoginState {
        return {
            result: 'success',
            response: {
                body: 'logged in!',
            },
        };
    }

    function printLoginState2(state: LoginState) {
        if (state.result === 'success') {
            console.log(`:) ${state.response.body}`)
        } else {
            console.log(`:( ${state.reason}`)
        }
    }
}