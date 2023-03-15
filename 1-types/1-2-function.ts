{
    // Javascript 💩
    function jsAdd(num1, num2) {
        return num1 + num2;
    }

    // TypeScript ✨
    function add(num1: number, num2: number): number {
        return num1 + num2;
    }

    // Javascript 💩
    function jsFetchNum(id) {
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100)
        })
    }

    // TypeScript ✨
    function FetchNum(id: string): Promise<number> {
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100)
        })
    }
}