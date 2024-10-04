

function passwordGenerate( length,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols) {

    let lowerCaseChars = "abcdefghijklmnopqrstuvwxyx";
    let upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYX";
    let numbers = "0123456789";
    let symbols = "!@$%^&*()_+*/?";

    let allowsChars = "";
    let password = "";

    allowsChars += includeLowerCase ? lowerCaseChars : "" ;
    allowsChars += includeUpperCase ? upperCaseChars : "" ;
    allowsChars += includeNumbers ? numbers : "" ;
    allowsChars += includeSymbols ? symbols : "" ;

    if( length <= 0 ) {
        return `password length must be gather than or equal 1`;
    }
    if(allowsChars.length == 0) {
        return `at list one set of character needs to be selected`;
    }
    for( let i = 0; i < length; i++ ) {
        let character = Math.floor(Math.random()*allowsChars.length);
        password += allowsChars[character];
    }

    return password;
}

let passwordLength = 12;
let includeLowerCase = true;
let includeUpperCase = true;
let includeNumbers = true;
let includeSymbols = true;

let randomPassword = passwordGenerate(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
console.log(randomPassword);