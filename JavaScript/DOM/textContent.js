//  DocumentFragment in javascript

// let menu = document.querySelector('#menu');
// let lan = ['java', 'python', 'javascript', 'php'];

// let fregment = document.createDocumentFragment();
// lan.forEach((langauge) => {
//     let li = document.createElement('li');
//     li.textContent = langauge;
//     fregment.appendChild(li);
// })
// menu.appendChild(fregment);

// //  insertbefore() methode in javascript
// let bef = document.querySelector('#before');
// let li = document.createElement('li');
// li.textContent = 'Home';
// bef.insertBefore(li, bef.firstElementChild);


// //  append and prepend mathod
// let beff = document.querySelector('#before');
// let names = ['shibli', 'noman', 'sarkar'];

// let DOMScript = names.map((names) => {
//     let li = document.createElement('li');
//     li.textContent =  names;
//     return li;
// });
// // beff.append(...DOMScript);
// beff.prepend(...DOMScript);


// //insertAdjacentHTML method 
// let menus = document.querySelector('#menus');
// menus.insertAdjacentHTML("beforebegin", '<h3>beforeBeing</h3>');
// menus.insertAdjacentHTML("afterbegin", '<h3>afterBeing</h3>');
// menus.insertAdjacentHTML("afterend", "<h3>afterend</h3>");
// menus.insertAdjacentHTML("beforeend", "<h3>beforeend</h3>");

//  replace() method
let menu = document.querySelector('#menu');
let li = document.createElement('li');
li.textContent = "HOME";
// menu.replaceChild(li, menu.firstElementChild);
// menu.replaceChild(li, menu.lastElementChild);
// menu.removeChild(menu.firstElementChild);  // remove child of the list

// cloneNode in the list
let cloneNode = menu.cloneNode(true);
cloneNode.id = "CloneID";
document.body.appendChild(cloneNode);