const arr = [1,2,3,4,5,6];

//  For Loop 
for( let i = 0 ; i < arr.length; i++ ) {
    console.log(arr[i]);
}

//  ForEach Loop
arr.forEach(myFun);

function myFun(z) {
    console.log(z);
}