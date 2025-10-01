const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)   // it will take array as a element in first array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//so to avoid such case we can use concat() or spread method

//.........concat....... it returnss a new array
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


//........spread method...........use triple dot before array
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);



// ....flat.................
// Returns a new array with all sub-array elements concatenated into it 
// recursively up to the specified depth(if wwe dont know depth we can give infinity)
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))  //check the array status
console.log(Array.from("Hitesh"))  //build an array from the value 
console.log(Array.from({name: "hitesh"})) // interesting case

let score1 = 100
let score2 = 200
let score3 = 300


//we can use "of"to Returns a new array from a set of elements
console.log(Array.of(score1, score2, score3));