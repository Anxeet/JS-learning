const score = 400
// console.log(score);

const balance = new Number(100) //Number object
// console.log(balance);


//TO CONVERT NUMBER INTO STRING : USE toString(()
console.log(balance.toString().length);
// console.log(balance.toFixed(1));
 



const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); //OP-123.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString());   //USA standard-1,000,000
// console.log(hundreds.toLocaleString('en-IN'));   //Indian standard-10,00,000


// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.sqrt(4));
// console.log(Math.pow(2,3));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)