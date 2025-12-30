console.log(Math)

/*
JavaScript Math Object – Constants, Methods, Arguments & Use
(Note: Math is NOT a constructor. Use Math.method(), not new Math())

=====================
MATHEMATICAL CONSTANTS
=====================
- Math.E
  -> Euler’s number (≈ 2.718)

- Math.PI
  -> Value of π (≈ 3.14159)

- Math.LN2
  -> Natural log of 2

- Math.LN10
  -> Natural log of 10

- Math.LOG2E
  -> Base-2 log of e

- Math.LOG10E
  -> Base-10 log of e

- Math.SQRT2
  -> Square root of 2

- Math.SQRT1_2
  -> Square root of 1/2


=====================
ROUNDING & ABSOLUTE
=====================
- Math.abs(x)
  -> Absolute value

- Math.ceil(x)
  -> Rounds up

- Math.floor(x)
  -> Rounds down

- Math.round(x)
  -> Nearest integer

- Math.trunc(x)
  -> Removes decimal part

- Math.sign(x)
  -> Returns -1, 0, or 1


=====================
POWER & ROOT
=====================
- Math.pow(base, exp)
  -> Power calculation

- Math.sqrt(x)
  -> Square root

- Math.cbrt(x)
  -> Cube root

- Math.hypot(...values)
  -> Square root of sum of squares


=====================
TRIGONOMETRY (radians)
=====================
- Math.sin(x)
- Math.cos(x)
- Math.tan(x)

- Math.asin(x)
- Math.acos(x)
- Math.atan(x)
- Math.atan2(y, x)

- Math.sinh(x)
- Math.cosh(x)
- Math.tanh(x)

- Math.asinh(x)
- Math.acosh(x)
- Math.atanh(x)


=====================
LOGARITHMIC & EXPONENTIAL
=====================
- Math.log(x)
  -> Natural log (base e)

- Math.log2(x)
  -> Base-2 log

- Math.log10(x)
  -> Base-10 log

- Math.log1p(x)
  -> log(1 + x), accurate for small x

- Math.exp(x)
  -> e^x

- Math.expm1(x)
  -> e^x - 1 (accurate for small x)


=====================
BITWISE / PRECISION
=====================
- Math.clz32(x)
  -> Count leading zero bits (32-bit)

- Math.imul(a, b)
  -> 32-bit integer multiplication

- Math.fround(x)
  -> 32-bit float rounding

- Math.f16round(x)
  -> 16-bit float rounding


=====================
MIN / MAX & RANDOM
=====================
- Math.min(...values)
  -> Smallest value

- Math.max(...values)
  -> Largest value

- Math.random()
  -> Random number between 0 (inclusive) and 1 (exclusive)
*/


//most imp here is Math.random...it generates random nos. between 0(inc) to 1(exc)

//if we have to generate between 10 and 100
let min=10
let max=100

console.log(Math.floor(Math.random()*(max-min+1))+min)