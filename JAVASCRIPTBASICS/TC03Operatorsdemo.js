//Arithmetic operators
var x = 5;
var y = 10;
var z = x + y; // Addition
var a = y - x; // Subtraction
var b = x * y; // Multiplication
var c = y / x; // Division
var d = y % x; // Modulus

//Assignment operators
var p = 5;
p += 3; // Equivalent to p = p + 3
p -= 2; // Equivalent to p = p - 2
p *= 4; // Equivalent to p = p * 4
p /= 2; // Equivalent to p = p / 2
p %= 3; // Equivalent to p = p % 3

//Comparison operators
var e = 5;
var f = 10;
console.log(e == f); // false
console.log(e != f); // true
console.log(e < f); // true
console.log(e > f); // false
console.log(e <= f); // true
console.log(e >= f); // false

//Logical operators
var g = true;
var h = false;
console.log(g && h); // false
console.log(g || h); // true
console.log(!g); // false

//Bitwise operators
var i = 5; // Binary: 101
var j = 3; // Binary: 011
console.log(i & j); // 1 (Binary: 001)
console.log(i | j); // 7 (Binary: 111)
console.log(i ^ j); // 6 (Binary: 110)
console.log(~i); // -6 (Binary: ...110)
console.log(i << 1); // 10 (Binary: 1010)
console.log(i >> 1); // 2 (Binary: 010)