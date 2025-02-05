console.log("2" >1)
console.log("02" > 1)

console.log(null >0);  //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined >0);  //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false

//The reason is that an equality check == amd comparisons >= <= >< works differently.
//comparisons connvert null to a number