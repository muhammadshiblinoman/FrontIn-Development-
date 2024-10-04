// CallBack Function
let Display = (Someting) => {
    console.log(Someting);
}
//  HigherOrder Function
let HigherOrder = ( name, Class, CallBackFun ) => {
    const Details = `My name is ${name}. I read in ${Class}.`;
    CallBackFun(Details);
}
HigherOrder("Noman", "Honours", Display);
