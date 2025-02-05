//Data Types

//Primitive
//7 Types - String , Number , Boolean , null , undefined , Symbol , bigInt

const score = 100
const scoreValue  = 100.3

const isLoggedIn = false
const outsideTemp =null
let userEmail  // undefined

const id = Symbol('123')
const anotherId = Symbol('123')  //false

console.log(id == anotherId)

const bigNum = 2346373736n
console.log(typeof (bigNum))

//Reference (Non Primitive)
//Array  Object Functions

//array
let name = ["abc" , "cde" , "efg"]

//object
let obj ={ 
    name:"vaishnavi",
    age:20
 }
 
//function
 function myfun () {
 }

 console.log(typeof (name))
 console.log(typeof (myfun))
 console.log(typeof (obj))





// Return type of variables in JavaScript
// 1) Primitive Datatypes
// Number => number
// String => string
// Boolean => boolean
// null => object
// undefined => undefined
// Symbol => symbol
// Biglnt => bigint


// 2) Non-primitive Datatypes
// Arrays => object
// Function => function
// Object => object
