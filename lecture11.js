//String in JavaScript

const name = "vaishnavi"
const repoCount = 750
console.log(name + repoCount + "value");

//Template Literals (string Interpolation)
console.log(`Hello my name is ${name} and my repo count is ${repoCount} ` );

const gameName = new String('vaishnavi-raj-cse');
console.log(gameName._proto_);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0 , 4)  //we can't give negative value in substring
console.log(newString);

const anotherString = gameName.slice(-8 , 4) //we can give negative value to slice method
console.log(anotherString);

const newStringOne = "   shelley   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vaishnaviraj.com/shelley%20chaudhary"
console.log(url.replace('%20' , '-'));

console.log(url.includes('shelley'));


console.log(gameName.split('a'));
