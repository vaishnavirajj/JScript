//Singleton
//const tinderUser  = new Object()

const tinderUser = {}
tinderUser.id ="123abc"
tinderUser.name = "samy"
tinderUser.isLoggedIn = false


//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"vaishnavi",
            lastname:"raj"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj3 = {5: "a" , 6: "b"}

// const obj4 = {obj1 , obj2 , obj3}
// console.log(obj4);

// const obj4 = Object.assign({} , obj1 , obj2 , obj3)  //target=>{} and obj=>source
// console.log(obj4);

const obj4 = {...obj1 , ...obj2 , ...obj3}
//console.log(obj4);


const user = [
    {
        id:1,
        email:"shellley@gmail.com"
    },

    {
        id:1,
        email:"h@gmail,com"
    },

    {
        id:1,
        email:"s@gmail.com"
    },
]

user[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));