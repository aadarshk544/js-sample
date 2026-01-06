const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {     //Object.keys(emptyObj)=> this returns an arr
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let ;
//  = 5 ?? 10  //takes first val =5
//  = null ?? 10  //here also takes first numeric val....10
//  = undefined ?? 15  here also..takes first numeric val....15
 a= null ?? 10 ?? 20 //10



console.log();

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")