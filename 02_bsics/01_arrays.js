
// arrays

/* 
/*
IMPORTANT & MOST USED JAVASCRIPT ARRAY METHODS

=====================
BASICS (very common)
=====================
- push(...items)
  -> Add elements at the end

- pop()
  -> Remove last element

- shift()
  -> Remove first element

- unshift(...items)
  -> Add elements at the start

- length
  -> Number of elements in array


=====================
ACCESS / SEARCH
=====================
- at(index)
  -> Access element (supports -ve index)

- indexOf(value)
  -> First index of value

- lastIndexOf(value)
  -> Last index of value

- includes(value)
  -> Check if value exists

- find(callback)
  -> Returns first element matching condition

- findIndex(callback)
  -> Index of first match


=====================
TRANSFORM (VERY IMPORTANT)
=====================
- map(callback)
  -> Transform each element (returns new array)

- filter(callback)
  -> Select elements based on condition

- reduce(callback, initialValue)
  -> Reduce array to single value (sum, max, etc.)

(🔥 map, filter, reduce = interview holy trinity)


=====================
ITERATION
=====================
- forEach(callback)
  -> Loop through array (no return)

- some(callback)
  -> true if ANY element matches

- every(callback)
  -> true if ALL elements match


=====================
MODIFICATION
=====================
- splice(start, deleteCount, ...items)
  -> Add/remove elements (modifies array)

- slice(start, end)
  -> Copy part of array (no mutation)

- concat(...arrays)
  -> Merge arrays

- fill(value, start?, end?)
  -> Fill array with value

- copyWithin(target, start, end?)
  -> Copy part within same array


=====================
SORTING / REVERSING
=====================
- sort(compareFn?)
  -> Sort array (modifies original)

- reverse()
  -> Reverse array (modifies original)


=====================
UTILITY
=====================
- join(separator)
  -> Convert array to string

- flat(depth?)
  -> Flatten nested arrays

- flatMap(callback)
  -> map + flat (depth = 1)

- toString()
  -> Convert array to string


IMPORTANT STATIC ARRAY METHODS

- Array.from(iterable, mapFn?, thisArg?)
  -> Create array from iterable or array-like

- Array.of(...items)
  -> Create array from arguments

- Array.isArray(value)
  -> Check if value is an array
*/



const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  //in myn2 removed ele will be there and in my arr remaining will be there.....myn2=[1,2,3] myarr=[0,4,5]
console.log("C ", myArr);
console.log(myn2);




const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  //args are depth
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting   o/p of this []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));