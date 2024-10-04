let massage = false;

let promise = new Promise( (resolve, reject) => {
    if(massage) {
        resolve([
            {username: "Noman", email: "noman@gmail.com"},
            {username: "Shibli", email: "shibli@gmail.com"},
        ])
    } else {
        reject("User is Not Valid");
    }
})
promise.then((s) =>{
    console.log(s);
})
promise.catch((error) => {
    console.log(error);
})
