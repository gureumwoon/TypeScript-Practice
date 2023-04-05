// Java: Exception
// JavaScript: Error

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
    if (fileName === 'not exist!💩') {
        throw new Error(`file not exist! ${fileName}`);
    }
    return 'file contents📁';
}

function closeFile(fileName: string) {
    //
}

const fileName = 'not exist!💩';

try {
    console.log(readFile(fileName));
} catch (error) {
    console.log(`catched!!`);
} finally { // 성공하든 실패하든 상관없이 무언가를 수행해야 한다면 finally를 적는 것이 좋다.
    closeFile(fileName);
    console.log(`finally!!`);
}

console.log(`!!!`);
// console.log(readFile(fileName));


// finally 생략버전
function run() {
    const fileName = 'not exist!💩'

    try {
        console.log(readFile(fileName));
    } catch (error) {
        console.log(`catched!!`);
        return;
        // 이렇게 에러가 발생하면 바로 return 시킬거야 해버리면
        // 밑에 closed가 출력되지 않고 여기서 멈추게 돼.
        // 근데 만약 catch안에서 무언가를 처리할 때 다른 에러가 발생하거나
        // return이 되거나 이런 경우에는 closeFile을 실행할 수 없기 때문에
        // 가능하면 try하는 것과 연관되어있는 항상 마지막에 마무리 해야 되는 것들이 있다면 finally안에서 하는 것이 더 좋다.
    }

    closeFile(fileName);
    console.log(`closed!`)
}
run();

// finally 있는 버전
function run2() {
    const fileName = 'not exist!💩'

    try {
        console.log(readFile(fileName));
    } catch (error) {
        console.log(`catched!!`);
        return;
    } finally {
        closeFile(fileName);
        console.log(`closed!`);
    }
}
run2();
