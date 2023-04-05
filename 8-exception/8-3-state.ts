{
    // Error State

    // 참고: TypeScript에서 구현된 catch()에는 어떠한 타입정보도 전달되지 않아서 instanceOf를 사용할 수 없다. 😭

    // 에러라면 어떤 reason으로 실패할 수 있는지 적어줘야 좋다. 그래서 나중에 이 에러를 핸들링 할 때
    // 적절하게 에러메세지를 선택해서 사용자에게 보내준다던지 재시도를 한다던지 이런 일들을
    // 할 수 있게 된다.
    // 그래서 가급적이면 프로그래밍을 할 때 내가 예상할 수 있는 상태가 있겠지 (성공적인 상태, 실패적인 상태)
    // 이런것들을 타입으로 정의하는 것이 조금 더 깔끔하고 안정적이고 예상 가능하게 프로그래밍을 할 수 있다.
    type NetworkErrorState = {
        result: 'fail';
        reason: 'offline' | 'down' | 'timeout';
    };

    type SuccessState = {
        result: 'success';
    };

    type ResultState = SuccessState | NetworkErrorState;

    class NetworkClient {
        tryConnect(): ResultState { }
    }

    class UserService {
        constructor(private client: NetworkClient) { }

        login() {
            this.client.tryConnect();
        }
    }

    class App {
        constructor(private userService: UserService) { }
        run() {
            try {
                this.userService.login()
            } catch (error) {
                // show dialog to user
            }
        };
    }

    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new App(service);
    app.run();
}