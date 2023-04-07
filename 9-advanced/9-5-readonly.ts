{
    type ToDo = {
        title: string;
        description: string;
    }

    function display(todo: Readonly<ToDo>) {
        // todo.title = 'woon' 변경불가
    }

    // 가변성의 수정이 가능한 object를 여기저기 전달하는 것은 굉장히 위험하다.
    // 항상 불변성을 보장하는 것이 좋다.
}