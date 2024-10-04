//  For Loop
const array1=[1,2,3,4,5,6,7,8];
for( let i = 0; i < array1.length; i++ ) {
    console.log(array1[i]);
}

// For OF Loop
for( newArray of array1 ) {
    console.log(newArray);
}

//  For In Loop
for( newArray in array1 ) {
    console.log(newArray);  // output in index number 
}