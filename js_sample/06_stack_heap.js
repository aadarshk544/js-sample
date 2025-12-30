/*
    Stack is a primitive datatype.....called by value
    Heap is a reference datatype....called by reference   array,objects and functions
*/


let num1=6   // stored in stack
let num2=num1  // copy of num1 is stored in num2

num1++
//console.log(num1)  //7
//console.log(num2)  //6

let myObj={
    name:"Aadarsh",
    age:21
}   // stored in heap

let myNewObj=myObj  // here reference of myObj is copied to myNewObj

myObj.age=26
console.log(myObj.age)  //26
console.log(myNewObj.age)  //26
