// Immediately Invoked Function Expressions (IIFE)

//To remove the pollution from global scope , we use iife approach
// synatx ()()
// first ()= is for writing the defination of function
// second () = is for function call

// eg-

//     // Without  IIFE.......
// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai() 

        //named IIFE.............
(function chai(){
    console.log(`DB CONNECTED`);
})();

//";" is important to end sometime when write 2 back to back iife function so better put 


//...........syntax with arrow function and argument and IIFE.............................

//unnamed iife
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

