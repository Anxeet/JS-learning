// array
    //in js array r resizable and can contain mix of different data types
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)    //add element in array in end
// myArr.push(7)
// myArr.pop()      //remove the last element

// myArr.unshift(9)     // all element in the array in begining 
// myArr.shift()        //remove the first element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));   // for outof index elements op is -1

// const newArr = myArr.join()      // Adds all the elements of an array into a string,

// console.log(myArr);
// console.log( newArr);


// ...........slice AND splice..............

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
//last index not counted so slice from idx 1-2
console.log(myn1);
console.log("After slice ", myArr); //no change occur to original array


const myn2 = myArr.splice(1, 3)
//last index counted so slice from idx 1-3
console.log(myn2);
console.log("After splice ", myArr);  //spliced iteams removed from the original array
