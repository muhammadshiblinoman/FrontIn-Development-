let fun1 = () => {
    console.log("Fun1");
}
let LodingTime = () =>{
    console.log("Fun2");
}
let fun2 = () => {
    setTimeout(LodingTime, 2000);
}
let fun3 = () => {
    console.log("Fun3");
}

fun1();
fun2();
fun3();
fun1();