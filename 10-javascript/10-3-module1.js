export default function add(a, b) {
    return a + b;
}

export function print() {
    console.log('print')
}

// 한 파일에서 두 가지의 default를 쓸 수는 없다.
// export는 함수뿐만 아니라, 변수도 export 할 수 있다.

export const number = 10;