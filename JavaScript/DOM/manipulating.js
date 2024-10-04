// // Creat div in HTML
// let div = document.createElement('div');
// div.innerHTML = "<p>this is p tag</p>";
// document.body.appendChild(div);

// // Creat div id in HTML
// let div = document.createElement('div');
// div.id = 'Div1';
// div.className = 'Div1';
// div.innerHTML = "<p>this is p tag</p>";
// document.body.appendChild(div);

// // Creat Text in HTML
// let div = document.createElement('div');
// div.id = 'Div1';
// div.className = 'Div1';
// let text = document.createTextNode("Inner text into the div");
// div.appendChild(text);
// document.body.appendChild(div);

// //  Adding an element to a div
// let div = document.createElement('div');
// div.id = 'Div1';
// div.className = 'Div1';
// let H1 = document.createElement("h1");
// H1.textContent = "Hello";
// div.appendChild(H1);
// document.body.appendChild(div);

//  //Creat unordered list using javascript
// let UL = document.createElement('ul');
// UL.id = 'manu';
// // UL.innerHTML = "<li> Tea </li> <li> Cofee </li> <li> Rice </li>";
// let li1 = document.createElement('li');
// li1.textContent = "Tea";
// UL.appendChild(li1);
// let li2 = document.createElement('li');
// li2.textContent = "Coffee";
// UL.appendChild(li2);
// document.body.appendChild(UL);
// //  Creat script tag in HTML
// let script = document.createElement('script');
// script.src = "noman.js";
// document.body.appendChild(script);

// //  Using AppendChild
// let menu = document.querySelector('#menu');
// function creatMenu( name ) {
//     let li = document.createElement('li');
//     li.textContent = name;
//     return li;
// }
// menu.appendChild(creatMenu('Tea'));
// menu.appendChild(creatMenu('Coffee'));
// menu.appendChild(creatMenu('Rice'));

// //  TextContent menu in javaScript
let note = document.getElementById('note');
// console.log(note.textContent);
console.log(note.innerHTML);
