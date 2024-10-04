//// Array in javaScript

const langauge = ['HTML', 'CSS', 'JavaScript', 'PHP', true, 50];

// const langauge2 = new Array('HTML', 'CSS', 'JavaScript', 'PHP', true, 50); // Less use in progamer
// console.log(langauge2);
// console.log(langauge2[2]);

langauge[2] = 'Phython';
console.log(langauge);
console.log(langauge[2]);

console.log(langauge.toString()); /// array to string

langauge.pop(); // delete last element in the array 
console.log(langauge);

langauge.push('200'); // adding a element in the last position
console.log(langauge.join(' ')); // seperation in array element

langauge.unshift('C++'); // adding a element in a first position
console.log(langauge);

langauge.shift(); // delete first element
console.log(langauge);

const num1 = [1,2,3,4,5];
const num2 = [6,7,8,9,10];

const addNums = num1.concat(num2); /// adding multipule different array
console.log(addNums);

const mArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(mArray);
console.log(mArray.flat()); // convert two dimantion array to one dimantion array

langauge.splice(2,0 ,'Info', 'Info2'); // adding element in a separation position no delete other element
console.log(langauge);
langauge.splice(0,2); // delete element in a separation position no adding other element
console.log(langauge);