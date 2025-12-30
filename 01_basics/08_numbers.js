const num=new Number(10)
//by using new it creates object ....it is not a primitive datatype

/*
JavaScript Number Methods – Arguments & Use

Constructor:
- Number(value)
  -> Converts a value into a number (or NaN if not possible)

Exponential notation:
- toExponential(fractionDigits?)
  -> Returns number in exponential (scientific) form
  -> fractionDigits = number of digits after decimal

Fixed-point notation:
- toFixed(digits)    point ke baad kitne digit chahiye
  -> Rounds number to specified decimal places
  -> Returns a string

Locale formatting:     
- toLocaleString(locales?, options?)  1000000 => 1,000,000
  -> Formats number based on locale (commas, currency, etc.)

Precision control:     ans kitne digit me chahiye
- toPrecision(precision)
  -> Formats number to specified total significant digits
  -> Returns a string

String conversion:
- toString(radix?)  (Here radix is base in which we have to convert 
                        e.g. (10).tostring(2) => 1010 and (10).tostring(8) => 12)
  -> Converts number to string
  -> radix = base (2 to 36)

Primitive value:
- valueOf()
  -> Returns the primitive  value from object
*/

console.log(num.toExponential(2))
console.log(num.toFixed(3))
console.log((10000000).toLocaleString('en-In'))   //to convert in indian format...default American => 10,000,000
console.log((123.856).toPrecision(4))
console.log(num.toString(2))
console.log(num.valueOf())

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)