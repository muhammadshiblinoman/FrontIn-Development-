let arr1 = [1,2,3,4,5,6,7,8,9,10];
let arr2 = arr1.filter(MyFun);
function MyFun( x ) {
    return x >= 4;
}
console.log(arr2);