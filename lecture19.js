//Function in js

function sayMyName() {
    console.log("S");
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("E");
    console.log("Y");
    
} 

sayMyName();

// function addTwoNumbers(number1 , number2){
//     console.log(number1  + number2);
// }

function addTwoNumbers(number1 , number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3 , 5)
//console.log("Result:" , result);




function loginUserMessage(username) {
    if (!username){   // or username === undefined
        console.log("please enter user name");
        return
        
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())




