// document.getElementById('btn').addEventListener('click', function() {
//     document.getElementById('btn').style.backgroundColor = '#227099';
// });

document.getElementById('btn').onclick = function () {
    document.getElementById('btn').style.backgroundColor = '#227099';
};

document.getElementById('btn').onclick = function () {
    document.getElementById('btn').innerHTML='Submited';
};

document.getElementById('name').onkeyup = function () {
    document.getElementById('name').style.textTransform = 'upperCase';
};