// Swap in two element
let a = 10, b = 20;
[a, b] = [b, a];
console.log(a, b);

// Reverse in array end to start
let colors = ["red", "blue", "green", "voilet", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);

// Assing an array in element
let Colors = ["red", "blue", "green", "voilet", "white"];
let [firstElement, secondElement, ...thirdElement] = Colors;
console.log(firstElement);
console.log(secondElement);
console.log(thirdElement);

// extract values from object
const person1 = {
    fristName: "Shibli",
    lastName: "Noman",
    age: 21,
    job: "Student",
}
const person2 = {
    fristName: "Muhammad",
    lastName: "Sarkar",
    age: 21,
    job: "Developer",
}
const {fristName, lastName, ...age} = person1;
console.log(fristName);
console.log(lastName);
console.log(age);

// Function Destructuer
function displayPerson({fristName, lastName, age, job}){
    console.log(`name: ${fristName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}
displayPerson(person1);