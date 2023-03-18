{
    // Array
    const fruits: string[] = ['🍅', '🍌'];
    const scores: number[] = [1, 3, 4];
    const scores2: Array<number> = [1, 3, 4];
    function printArray(fruits: readonly string[]) { }

    // Tuple(가독성 안 좋음.) -> interface , type alias, class로 대체해서 사용하는 게 좋다.
    let student: [string, number];
    student = ['name', 123];
    student[0] // name
    student[1] // 123
    const [name, age] = student;

}