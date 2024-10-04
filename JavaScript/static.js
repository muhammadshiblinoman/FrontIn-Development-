
class User{
    static count = 0;

    constructor(name) {
        this.name = name;
        User.count++;
    }
}

let user1 = new User("Noman");
let user2 = new User("Shibli");

console.log(user1.name);
console.log(user2.name);
console.log(User.count);