

// ...........singleton...............

// const tinderUser = new Object()  (singleton object)
const tinderUser = {}    //(NON singleton object)

tinderUser.id = "123abc"    //Adding key value to empty obj
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));    //return key array
// console.log(Object.values(tinderUser));      //return value array
// console.log(Object.entries(tinderUser));     //return key value array in an array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));   //check if a key preasent or not 




//..........nested object................
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
//to access nested objects-
// console.log(regularUser.fullname.userfullname.firstname);





// ............To add 2 or more objects...............

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// METHOD 1 (wrong)
// const obj3 = { obj1, obj2 }        //it will take 2 objects instead of merging them

//METHOD 2
// const obj3 = Object.assign({}, obj1, obj2, obj4)   //{} is target and resr obj r source

//METHOD 3 (recomended)
const obj3 = {...obj1, ...obj2, ...obj4}      //just like array
// console.log(obj3);





//............Array of objects .......................
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    },
]

console.log(users[1] )     //to access obj




// ............ OBJECT DESTRUCTURING............

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor )     //we dont call like this ususally

//instead we use-
const {courseInstructor} = course
// console.log(courseInstructor);

//OR  
const {courseInstructor: i} = course
// console.log(i);



//...............JSON data............
// * JSON data can be collected in both object{ } n array format[ ]

//it looks like an object but not
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


//similarly it looks like array not but one
// [
//     {....},
//     {....},
//     {....}
// ]

