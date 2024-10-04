function isSubscribed() {
    console.log('Subscribe');
}
document.getElementById('btn').addEventListener('click',isSubscribed);
/**
 * Self-Invoked Function
 * Automatic Invocation
*/
(function( massage) {
    console.log('I an selff-Invoke function', massage);
})("Hello");

/**
 * one line function call and return
 */
// let maths = function(x, y) {
//     return x*y;
// }
let maths = (x , y ) => x*y;
console.log(maths(3,4));

/**
 * Nasted Function
 */
function greet( fristName ) {
    function fullIntro () {
        alert('Hello ' + fristName );
    }
    return fullIntro();
}
greet('Shibli');