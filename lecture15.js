const marvel_heroes = ["thor" , "ironman" , "spiderman"]
const dc_heroes = ["superman" , "flash" , "batman"];

//marvel_heroes.push(dc_heroes)   //wrong way Coz it consider the entire string as a single element
// console.log(marvel_heroes); 
// console.log(marvel_heroes[3]);
// console.log(marvel_heroes[3][1]);

const allHeroes = marvel_heroes.concat(dc_heroes);  //concatenate and returns new string
//console.log(allHeroes);

const all_Heroes_spread = [...marvel_heroes , ...dc_heroes , 'captain America']
//console.log(all_Heroes_spread);

const anotherArr =[1 ,2 ,3 , [4 , 5 , 6] , 7 , [6 , 7, [ 4, 5]]]
//console.log(anotherArr);
const usableArr = anotherArr.flat(2);  //2 is depth u can also give infinity 
//console.log(usableArr);

console.log(Array.isArray("vaishnavi"));
console.log(Array.from("vaishnavi"));
console.log(Array.from({name: "vaishnavi"}));  //Interview Intersting



let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1 , score2 , score3));

