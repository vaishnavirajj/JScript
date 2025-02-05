//ARRAY

const myArr = [0 , 1 ,2, true ,"shelley"]
// console.log(myArr);


const myArr2 = new Array(1 , 2, 3 ,4 ,5)
// console.log(myArr2[1]);   //access element through indexing
// console.log(myArr2);

//Array methods

// myArr2.push(6)
// console.log(myArr2);
// myArr2.push(7)
// console.log(myArr2);
// myArr2.pop()
// console.log(myArr2);

myArr2.unshift(9)   // add element from starting of an array
// console.log(myArr2);
 
myArr2.shift()  //remove element from starting of an array
// console.log(myArr2);


// console.log(myArr2.includes(5));
// console.log(myArr2.indexOf(4));


//*************IMPORTANT *****************************//
const newArr = myArr.join()  //join method joins the array also convert it into string data Type from object data Type

// console.log(myArr);
// console.log(newArr);

//slice and splice
console.log("A" , myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B" , myArr);  //slice makes the changes in deep copy of  string and also exclude the range
const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C" , myArr)    //splice manipulates the original string (shallow copy) and also include the range