
class MySelf{
    constructor(name, age, village) {
        this.name = name;
        this.age = age;
        this.village = village;
    }

    fatherName(name) {
        console.log(`my father name is ${name}`);
    }
}

let mySelf = new MySelf("Shibli",20,"Dacope");
console.log(mySelf.name);
console.log(mySelf.village);
mySelf.fatherName("Rabbani");