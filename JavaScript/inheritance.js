
class Animal{
    alive = true;

    Output() {
        console.log(`This is ${this.name}`);
    }
}

class Cow extends Animal {
    name = "Cow";
}
class Ox extends Animal{
    name = "Ox";
}
class Tiger extends Animal {
    name = "Tiger";
}

let cow = new Cow();
let ox = new Ox();
let tiger = new Tiger();

cow.Output();
ox.Output();
tiger.Output();
console.log(cow.alive);