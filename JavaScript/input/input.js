let username;
document.getElementById("btn").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("h1").textContent = `Hello ${username}`;
    document.getElementById("h1").style.color = "red";
}