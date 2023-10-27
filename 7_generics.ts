class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<string>("Pesho")); //Prints Pesho
console.log(identity(new Person("Pesho"))); //Type is inferred

function log<T extends Object>(message: T): void {
    console.log(message.toString());
}

log("Pesho"); //Prints Pesho
log(new Person("Pesho")); //Prints Pesho


/*
class Animal {
    numLegs: number;
}

class BeeKeeper {
    constructor(public hasMask: boolean){}
}

class ZooKeeper {
    constructor(public nametag: string){}
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

//Admite instancia de un objeto que extienda de "Animal"
function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag; //typechecks!
createInstance(Bee).keeper.hasMask; //typechecks!

*/

