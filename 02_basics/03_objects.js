// not singleton = jb obj literals ki tarah declare krte hen
// singleton = jb constructor se obj banta hey  (// Object.create (constructor mehod))




// ...........object literals...............

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",    //syntax for including symbols [ ]

    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]    //here we can give object(array) as value
}

// console.log(JsUser.email)
//or
// console.log(JsUser["email"])   
// as js save key as string so in thos method we have to give input as string


// console.log(JsUser["full name"])
//this kind of values can only be accessed this way n cant be accessed using "."


// console.log(JsUser[mySym])
// syntax for printing symbols in a object




JsUser.email = "hitesh@chatgpt.com"         //overriding values 
// Object.freeze(JsUser)                    //locked
JsUser.email = "hitesh@microsoft.com"        // cant override coz freezed
// console.log(JsUser);



//including fubction in objcts
JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting());


//accessing the keys of the object bt "this" keyword
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetingTwo());