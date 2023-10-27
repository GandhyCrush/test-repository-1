class Animal {
    private name: string;
    constructor(name: string) { this.name = name; }
}

let cat: Animal = new Animal("Cat");
//console.log(cat.name);

class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    constructor(name: string) { super(name); }

    printDetails() {
        console.log(`Nombre: ${this.name}`);
    }
}

let empleado1 = new Employee("Gandhy");
empleado1.printDetails();

class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName
    }
}

let dad = new Octopus("Man with the 8 strong legs");
//dad.name = "Man with the 3-piece suit";