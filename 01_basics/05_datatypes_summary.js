//  Primitive  Creation of copy (deep copy)....pass by value

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  // compared by identity, always unique
 const bigNumber = 3456543576654356754n   //just write n in last 
    //typeof will give bigint
//console.log(typeof bigNumber);


// Reference (Shallow copy) (Non primitive)

// Array, Objects, Functions

let ans=new Number(10)     //it will create a object   can print its value by... console.log(ans.valueof())
console.log(ans.valueof())
let val=new Boolean(true)  //every thing in js cab be made as object....but it is not a recommended way



const heros = ["shaktiman", "naagraj", "doga"];   //its typeof  gives object but it is arr  isArray will give true
let myObj = {      //its typeof will give object
    name: "hitesh",
    age: 22,
}

const myFunction = function(){     //its typeof will give function
    console.log("Hello world");
}
myFunction()

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
