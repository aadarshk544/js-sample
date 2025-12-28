let score= null
//console.log(typeof score)

let score_in_number= Boolean(score) 
          // Can do typecasting just by writing first letter into Capital i.e. Number, String, Boolean

//console.log( score_in_number) 

/*  type will be changed to number everywhere    

    "3560" = 33
    "3560abcd" = NaN i.e. 
    true=1, false=0
    undefined = undefined
    null= 0

     
    if we convert in Boolean
    everything will be changed in boolean (can check by typeof)  ...equal to ke aage wala uske op hoga(updated)
 
    1 or anyvalue in no. or string = true,  
    "" or null or undefined or 0 = false

*/


/*****************************Operations*****************************************/


//not writing basic operational operator direct gameplay😎
let val=3
let negval=-val
//console.log(negval)

// for power use 2**3 = 8
let str1="Hello"
let str2=" ask"
console.log(str1+str2)

//console.log("1"+2+2)    // 122
//console.log(1+2+"2")    //32
//console.log(1+"2"+3)    //123
//console.log(1+2+"30"+4+5) //33045 ek baar string aa gaya toh aage wale sb string

/*always write expressions in brackets
e.g  3+4*5%6**2  bad practice and not preefersble...but should learn preference

 correct way is (3+4)*((5%6)**2)
*/

/* console.log(+true)=1
    console.log(true+) =>error  

    but dont use this it is confusing
*/




/******************************Relational Operator******************************/

//Not writing basic relational stuffs

// console.log("2" > 1)  //true
// console.log("02" > 1)  // true

console.log(null > 0);  // false
console.log(null == 0);  //false
console.log(null >= 0);   // true 

console.log(undefined == 0);  //false
console.log(undefined > 0);  //false
console.log(undefined < 0);  //false

console.log("02">true)   //true


// ===  strict check   it checks both data and datatype...if both same then true

console.log("2" === 2);
