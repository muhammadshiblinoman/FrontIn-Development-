// let menu = document.querySelector("#menu");
// menu.style.color = "red";
// menu.style.backgroundColor = "green";
// menu.style.width = "80%";
// menu.style.height = "80%";
// menu.style.fontWeidth = "bold";

let menu = document.querySelector("#menu");
// let style = getComputedStyle(menu);
let style = getComputedStyle(menu, "::first-letter");
console.log(style.fontSize);
