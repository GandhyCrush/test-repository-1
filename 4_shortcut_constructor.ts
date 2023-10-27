class Animal2 {
    //constructor(private name: string) { }
    constructor(readonly name: string) { }
}

let cat2: Animal2 = new Animal2("Cat");
console.log(cat2.name);