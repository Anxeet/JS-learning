
//"This" keyword is used to refer current contex(value of var) 
// of an OBJECT not FUNCTION (IMP)

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);

//*****.........******___________IMP___________*********........************/
        
        //when this is called in an object inside a method it will refer toi the object that called the method 
        console.log(this);  // it will print all current context , means all keyvalue pair
        //so the value of the above this call is Object(user)
    }

}
// user.welcomeMessage()  
// user.username = "sam"
// user.welcomeMessage()





//................______________NOTE___________...................................
console.log(this);    // here it will give an empty objest { } as we r in node js
// but if we will run it in windos console it will return an windos{ } object




//.....................____NOTE___..............................

// *this works for object not functions 
//eg- here both will show undefined


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()




// ................_____Arrow Function____......................................


//basic syntax:    () => { }

// and we can hold it in a variable , eg-

//just remove the word "function" and put => instead of =

const chai =  () => {
    let username = "hitesh"
    console.log(this);  //it will give empty object{ }
}
// chai()





// .......basic ......
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }




//.....implicit return ...........
// (here we asume that return in mandatory so we dont use return keyword and { })

// const addTwo = (num1, num2) =>  num1 + num2



//..................IMP_________________________________________
//..........use paranthesis.............
//(if u use curly braces { } then use return key word but if use parenthesis( ) dont use return keyword )
// const addTwo = (num1, num2) => ( num1 + num2 )




//.............returning OBJECT........................
// when we have to return an object then we need to wrap it in { } and ( )
//eg-
// const addTwo = (num1, num2) => ({username: "hitesh"})


// will learn it in loop
// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()