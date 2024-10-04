let arr1 = [2,4,6,8,10];

//  ForEach Loop 
let arr2 = [];
arr1.forEach((x) => {
    arr2.push(x*x);
});
console.log(arr2);



//  Map  Function
let arr3 = arr1.map((z) => {
    return z*z;
});
console.log(arr3);