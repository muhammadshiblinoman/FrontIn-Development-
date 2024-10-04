
let countLabel = document.getElementById("countLabel");
let count = 0;
document.getElementById("decrease").onclick = function() {
    count--;
    countLabel.textContent = count;
}
document.getElementById("reset").onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
document.getElementById("increase").onclick = function() {
    count++;
    countLabel.textContent = count;
}

