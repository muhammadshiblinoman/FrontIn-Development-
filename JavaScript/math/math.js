//// Math in JavaScript

let num = 30.99099943;
// console.log(Math.floor(num));
// console.log(Math.round(num));
// console.log(Math.ceil(num));

// console.log(Math.pow(num,3));
// console.log(Math.sqrt(num));
// console.log(Math.abs(num));
// console.log(Math.PI);
// console.log(Math.sin((45*Math.PI)/180));
// console.log(Math.random().toFixed(2)*100);



// let upperValue = 6;
// let lowerValue = 1;
// let resultValue = Math.ceil(Math.random()*upperValue);

// console.log(resultValue);

function rollDice() {
    let randomNumber = Math.ceil(Math.random()*6);
    let imageSource = randomNumber + '.png';
    document.getElementById('ludo').src = imageSource;
};


//// Excution time and Date
// let startTime = Date.now();
// for( let i = 0;i < 100; i++ ) {
//     console.log(`My code`);
// }
// let endTime= Date.now();
// console.log(`Excution time = ${endTime-startTime} milliSeccond to complete`);
// let myDate = new Date();
// console.log(myDate.getDate());
// console.log(myDate.getMonth());

document.getElementById("btn").onclick = function() {
    document.getElementById("text").textContent = Math.floor(Math.random()*6)+1;
}