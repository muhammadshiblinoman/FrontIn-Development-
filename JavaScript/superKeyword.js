
class Animal{
    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }
}
class Dog extends Animal{
    constructor(name, age, runspreed) {
        super( name, age );
        this.runspreed = runspreed;
    }

    Output() {
        console.log(`The ${this.name} is ${this.age} years old. it's flying ${this.runspreed} `);
    }
}
class Cat extends Animal{
    constructor(name, age, runspreed) {
        super(name, age);
        this.runspreed = runspreed;
    }

    Output() {
        console.log(`The ${this.name} is ${this.age} years old. it's flying ${this.runspreed} `);
    }
}

let dog = new Dog("Tommy", 5, 20);
let cat = new Cat("Pussy",3,15);

dog.Output();
cat.Output();