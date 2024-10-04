
function passwordGenerate(length,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols) {

    let lowerCaseChars ="qwertyuiopasdfghjklzxcvbnm";
    let upperCaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()_+*/?";

    let allowsChars = "";
    let password = "";

    allowsChars += includeLowerCase ? lowerCaseChars : "";
    allowsChars += includeUpperCase ? upperCaseChars : "";
    allowsChars += includeNumbers ? numbers : "";
    allowsChars += includeSymbols ? symbols : "";

    if( length <= 0 ) {
        return `(password length must be gather than or equal 1)`;
    }
    if(allowsChars.length === 0) {
        return `(one character ar required in password)`;
    }

    for( let i = 0; i < length; i++ ) {
        let randomPas = Math.floor(Math.random()*allowsChars.length);
        password += allowsChars[randomPas];
    }

    return password;
}

let password = passwordGenerate(8,false,true,false,true);
console.log(password);