
let myCheckbox = document.getElementById("myCheckbox");
let visaBtn = document.getElementById("visaBtn");
let masterCardBtn = document.getElementById("masterCardBtn");
let paypalBtn = document.getElementById("paypalBtn");
let btn = document.getElementById("btn");
let mySubscribe = document.getElementById("mySubscribe");
let myPayment = document.getElementById("myPayment");

btn.onclick = ()=>{
    if(myCheckbox.checked) {
        mySubscribe.textContent = "You are Subscribed"
    } else {
        mySubscribe.textContent = "You are Not Subscribed"
    }

    if(visaBtn.checked) {
        myPayment.textContent = "You are Paying By Visa";
    } else if(masterCardBtn.checked) {
        myPayment.textContent = "You are Paying By MasterCard";
    } else if(paypalBtn.checked) {
        myPayment.textContent = "You are Paying By Paypal";
    } else {
        myPayment.textContent = "You are Not Paying";
    }
}
