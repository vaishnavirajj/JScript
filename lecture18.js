//Object destructure and JSON API INTRO

const course = {
    coursename : "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
console.log(course.courseInstructor);
const {courseInstructor} =course
console.log(courseInstructor);
const {courseInstructor : sir} = course
console.log(sir);


//JSON file format  => both key and value will be string

// {
//    "name" : "vaishnavi",
//    "coursename" :"js in hindi",
//    "price": "free"
// }


[
    {},
    {},
    {}
]
