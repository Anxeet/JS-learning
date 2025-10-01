const userEmail = []

if (userEmail) {
    console.log("Got user email");
    // here if we put anything in string it will give true
} else {
    // only empty string will give false 
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// any string except empty string ,"0"(zero as string), 'false'(false as string ), " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    //Object.keys(emptyObj) will return array of keys
    console.log("Object is empty");
}

// .................Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10   // 5
// val1 = null ?? 10   //10
// val1 = undefined ?? 15   //15
val1 = null ?? 10 ?? 20



console.log(val1);

//................. Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")