// Dates

let myDate = new Date()
console.log(myDate); //printing the object is not readable or understandable 
console.log(myDate.toString());
console.log(myDate.toDateString());  //gives only date n day not time 
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());  // gives date and time 
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// MONTHS START WITH 0 NOT 1 IN JS

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)

// let myCreatedDate = new Date("2023-01-14")
// BUT IN THIS FORMAT MONTHS START WITH 1
let myCreatedDate = new Date("01-14-2023")

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //cz month starts from 0 
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

