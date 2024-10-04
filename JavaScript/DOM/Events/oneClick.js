// HTML events Haddler
let btn = document.querySelector("#btn");
function Clicked() {
    alert("the Button was clicked");
}

// DOM 0 Lebel Handler
let H1 = document.querySelector("#H1");
H1.onclick = () => {
    alert("this massage from DOM 0 Lebel Handler");
}

// DOM 2 Lebel Handler
let A = document.querySelector("#A");
A.addEventListener("click", () => {
    alert("this massage from DOM 2 Lebel Handler");
})