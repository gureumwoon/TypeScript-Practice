{
    class NetworkClient {
        tryConnect(): void {
            throw new Error('no network!');
        }
    }

    class UserService {
        constructor(private client: NetworkClient) { }

        login() {
            // NetworkClient에서 에러가 발생하고 처음으로 쓰는 곳이 UserService
            // 그러니까 여기서 try..catch를 진행해야 함.

            // But! 에러가 발생했을 때 우아하게 정확하게 고급스럽게 처리할 수 있는 것이 아니라면
            // catch하지 않는 것이 더 낫다.그래서 어정쩡하게 할 수 있는 것도 없는데 잡는 것 보다는
            // 이 에러를 처리할 수 있는 곳에서 try 하는 것이 더 좋다.
            // try {
            //     this.client.tryConnect();
            // } catch (error) {
            //     console.log('catched!');
            // }
            this.client.tryConnect();
        }
    }

    class App {
        constructor(private userService: UserService) { }
        run() {
            // 그래서 여기서 에러를 처리하는 것이 더 좋다.
            // 조금 더 의미있는 에러 처리를 할 수 있음.
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
