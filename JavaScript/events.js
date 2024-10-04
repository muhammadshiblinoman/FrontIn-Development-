/// Events in JavaScript

// function subscribe() {
//     document.getElementById('text').innerHTML='Subcribed';
//     document.getElementById('btn').innerHTML='Subcribed';
//     document.getElementById('btn').style.backgroundColor='#262626';
// };

function keyPress() {
    document.getElementById('text').innerHTML='Key Presed';
}

// function onLode() {
//     alert('Testing JavaScript on load');
//     document.getElementById('text').innerHTML='Website Loded property';
// }

function windoResize() {
    document.getElementById('textarea').style.height='100px';
    document.getElementById('form').style.color='#ff0000';
};

function onScroll() {
    document.getElementById('text').innerHTML='Scrolling';
};

    // Good use in website make it can use other other html files
document.getElementById('btn').onclick = function () {
    document.getElementById('btn').innerHTML='Subscribed';
};

    //more than better implement function in website make
// document.getElementById('btn').addEventListener('click', function(e) {
//     document.getElementById('btn').innerHTML='Subscribed';
// }, false);


document.getElementById('ul').addEventListener('click', function(e) {
    console.log('UL Clicked')
}, false);
document.getElementById('li').addEventListener('click', function(e) {
    console.log('li Clicked')
}, false);