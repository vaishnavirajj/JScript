//Function with object and Array


//rest operator

// function calculateCartPrice(...num1) {
//         return num1
// }

function calculateCartPrice(val1 , val2 , ...num1) {
    return num1
}

//console.log(calculateCartPrice(200,300,40,50))



const user = {
    username: "vaishnavi",
    price: 199
} 
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user)
handleObject({
    username:"shelley",
    price:399
})

const mynewArray = [200 ,4000 ,500 ,600]

function returnSecValue(getArray) {
    return getArray[2]
}

console.log(returnSecValue(mynewArray));

console.log(returnSecValue([200,400,100,600,900]));

