try{
    console.log("My Name is Noman");
    // console.log(Num);
    let age = 25;
    if( age < 18 ) {
        throw "You are Baby";
    } else if(age >= 18){
        throw "You are Adult"
    }
} catch(Shibli) {
    // console.log(Shibli.name);
    // console.log(Shibli.message);
    console.log("Hello");
} finally{
    console.log("Hi");
}