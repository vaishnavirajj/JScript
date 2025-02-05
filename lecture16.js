
//object.create

//object literals 

const mySym = Symbol("key1")

const JsUser = {
    name:"vaishnavi",
    "full name" : "Vaishnavi Raj",
    [mySym] : "mykey1",
    age:20,
    location: "Jalandhar",
    email: "vaishnaviraj@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Tuesday"]
}

// console.log(JsUser.age);
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "vaishnavi@gmail.com"
Object.freeze(JsUser)
JsUser.email = "shelley@gmail.com"
console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}


JsUser.greetingTwo = function() {
    console.log(`Hello JS user , ${this.name} `);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

  