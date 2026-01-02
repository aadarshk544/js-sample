// Immediately Invoked Function Expressions (IIFE)....it is used to protect from global var pollution

// ()()...first() for writing function in it and second for calling it  as IIFE
// and here use ; after implementing....to write two IIFE conti...we have to use ; after the end of first

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {   //simple/un-named IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')