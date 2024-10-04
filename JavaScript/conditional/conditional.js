
document.getElementById("btn").onclick = ()=> {
    let age = userInput.value;
    age = Number(age);
    if( age >= 100 ) {
        document.getElementById("display").textContent = "You are too OLD";
    }
    else if(age == 0){
        document.getElementById("display").textContent = "You are new Born";
    }
    else if(age < 0) {
        document.getElementById("display").textContent = "You are not Born";
    }
    else {
        document.getElementById("display").textContent = "You are perfect Man";
    }
}