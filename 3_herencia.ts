class Animal {
    public name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}


class Snake extends Animal {
    constructor(name: string) { super(name); }

    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }

    move(distanceInMeters = 45) {
        console.log("Galoping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);