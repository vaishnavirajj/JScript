//Date and Time

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);   //object

let myCreatedDate = new Date(2025 , 0 ,23)
console.log(myCreatedDate.toLocaleString());

let myCreatedDate2 = new Date(2025 , 1 , 4)
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("01-14-2023") //follow  in india
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);  //in miliseconds
console.log(myCreatedDate3.getTime());  //in miliseconds
console.log(Math.floor(Date.now()/1000));  //in seconds


//************IMPORTANT**************************/
myCreatedDate3.toLocaleString('default' , {
    weekday:"long",
});