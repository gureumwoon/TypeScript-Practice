{
    // https://github.com/microsoft/TypeScript/blob/master/lib/lib.es5.d.ts


    // every
    // 하나라도 false 값이 있으면 every는 false가 됨.
    type Student = {
        passed: boolean;
    };
    const students: Student[] = [{ passed: true }, { passed: true }, { passed: false }];
    const result = students.every(student => {
        return student.passed;
    })
    console.log(result) // false


    class Animal { }
    class Cat extends Animal {
        isCat: boolean = true;
    }
    class Dog extends Animal {
        isDog: boolean = false;
    }
    const animals: Animal[] = [new Cat(), new Cat(), new Dog()];
    function isCat(animal: Animal): animal is Cat {
        return (animal as Cat).isCat !== undefined;
    }
    animals.every<Cat>(isCat); // false
}