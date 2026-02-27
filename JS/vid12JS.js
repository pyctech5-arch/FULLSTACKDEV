// JS NUMBERS METHODS\
/*
Basic Methods
Basic number methods can be used on any number:

toString()
toExponential()
toFixed()
toPrecision()
valueOf()
Static Methods
Static methods can only be used on Number:

Number.isFinite()
Number.isInteger()
Number.isNan()
Number.isSafeInteger()
Number.parseInt()
Number.parseFloat() */
/*The toString() Method
The toString() method returns a number as a string.

All number methods can be used on any type of numbers (literals, variables, or expressions):*/
/*The toString() Method
The toString() method returns a number as a string.

All number methods can be used on any type of numbers (literals, variables, or expressions):*/  
/*The toString() Method
The toString() method returns a number as a string.

All number methods can be used on any type of numbers (literals, variables, or expressions):

Example*/ 
let x = 123;
console.log(x.toString(),
(123).toString(),
(100 + 23).toString());
// The toString() method can take an optional radix argument to convert the number to a different base:
let y = 123;
let text = y.toString(2);
console.log(text);
/*The toExponential() Method
toExponential() returns a string, with a number rounded and written using exponential notation.

A parameter defines the number of characters behind the decimal point:*/
 let x1 = 9.656;
console.log(x1.toExponential(),x1.toExponential(2),
x1.toExponential(4),
x1.toExponential(6));
/*The toFixed() Method
toFixed() returns a string, with the number written with a specified number of decimals:*/
 let x2 = 9.656;
 console.log(x2.toFixed(0),
x2.toFixed(2),
x2.toFixed(4),
x2.toFixed(6));
/*The toPrecision() Method
toPrecision() returns a string, with a number written with a specified length:

Example*/ 
console.log(
x2.toPrecision(),
x2.toPrecision(2),
x2.toPrecision(4),
x2.toPrecision(6));
/*The valueOf() Method
valueOf() returns a number as a number.

Example*/
let x4 = 123;
console.log(
x4.valueOf(),
(123).valueOf(),
(100 + 23).valueOf());
/*In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).

The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.

There is no reason to use it in your code.

All JavaScript data types have a valueOf() and a toString() method. */

/*The Number() Method
The Number() method can be used to convert JavaScript variables to numbers:
If the number cannot be converted, NaN (Not a Number) is returned.*/
console.log(Number(true),
Number(false),
Number("10"),
Number("  10"),
Number("10  "),
Number(" 10  "),
Number("10.33"),
Number("10,33"),
Number("10 33"),
Number("John"));
/*The Number() Method Used on Dates
Number() can also convert a date to a number.

Example */
console.log(Number(new Date("1970-01-01")));
/* Note
The Date() method returns the number of milliseconds since 1.1.1970.

The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000:*/
console.log(Number(new Date("1970-01-02")));
/*The parseInt() Method
parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
If the number cannot be converted, NaN (Not a Number) is returned.
Example*/
console.log(
    parseInt("-10"),
parseInt("-10.33"),
parseInt("10"),
parseInt("10.33"),
parseInt("10 20 30"),
parseInt("10 years"),
parseInt("years 10")
);
/*The parseFloat() Method
parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:

Example*/
console.log(parseFloat("10"),
parseFloat("10.33"),
parseFloat("10 20 30"),
parseFloat("10 years"),
parseFloat("years 10"));
/*Number Object Methods
These object methods belong to the Number object:

Method	Description
Number.isInteger()	Returns true if the argument is an integer
Number.isNaN()	Returns true if the argument is NaN
Number.isFinite()	Returns true if the argument is not Infinity nor NaN
Number.isSafeInteger()	Returns true if the argument is a safe integer
Number.parseFloat()	Converts a string to a number
Number.parseInt()	Converts a string to a whole number
Number Methods Cannot be Used on Variables
The number methods above belong to the JavaScript Number Object.

These methods can only be accessed like Number.isInteger().

Using X.isInteger() where X is a variable, will result in an error:

TypeError X.isInteger is not a function. */
/*The Number.isInteger() Method
The Number.isInteger() method returns true if the argument is an integer.

Example */
console.log(Number.isInteger(10),
Number.isInteger(10.5));

/*The Number.isFinite() Method
The Number.isFinite() method returns true if the argument is not Infinity, -iInfinity, nor Nan.

Example */
console.log(Number.isFinite(123));

/*The Number.isNaN() Method
The Number.isNaN() method returns true if the argument is NaN (Not a Number).

Example */
console.log(Number.isNaN(123)
);
/*Note
Number.isNaN() is the preferred way to check for equality with NaN. You cannot test for equality with NaN using == or ===. */
/*The Number.isSafeInteger() Method
A safe integer is an integer that can be exactly represented as a double precision number.

The Number.isSafeInteger() method returns true if the argument is a safe integer.

Example*/ 
console.log(Number.isSafeInteger(10),
Number.isSafeInteger(12345678901234567890));
/*The Number.parseFloat() Method
Number.parseFloat() parses a string and returns a number.

Spaces are allowed. Only the first number is returned: */
console.log(Number.parseFloat("10"),
Number.parseFloat("10.33"),
Number.parseFloat("10 20 30"),
Number.parseFloat("10 years"),
Number.parseFloat("years 10"));
/*Note
The Number methods Number.parseInt() and Number.parseFloat()

are the same as the

Global methods parseInt() and parseFloat().

The purpose of these two methods is modularization of globals, to make it easier to use the same JavaScript code outside the browser.*/ 
/*The Number.parseInt() Method
Number.parseInt() parses a string and returns a whole number.

Spaces are allowed. Only the first number is returned:

Example*/ 
console.log(Number.parseInt("-10"),
Number.parseInt("-10.33"),
Number.parseInt("10"),
Number.parseInt("10.33"),
Number.parseInt("10 20 30"),
Number.parseInt("10 years"),
Number.parseInt("years 10"));
/*The Number.isInteger() Method
The Number.isInteger() method returns true if the argument is an integer.*/ 
console.log(Number.isInteger(10),
Number.isInteger(10.5));
/*The Number.isSafeInteger() Method
A safe integer is an integer that can be exactly represented as a double precision number.

The Number.isSafeInteger() method returns true if the argument is a safe integer.

Example isSafeInteger()
Note
Safe integers are all integers from -(253 - 1) to +(253 - 1).
This is safe: 9007199254740991. This is not safe: 9007199254740992.
*/
console.log(Number.isSafeInteger(10),
Number.isSafeInteger(12345678901234567890));
 
// JavaScript Number Properties
/*Number Properties
Number.EPSILON
Number.MAX_VALUE
Number.MIN_VALUE
Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER
Number.POSITIVE_INFINITY
Number.NEGATIVE_INFINITY
Number.NaN
See Also:
Numbers Tutorial
Number Methods
Number Reference
*/
/*JavaScript EPSILON
Number.EPSILON is the difference between the smallest floating point number greater than 1 and 1.

Example */ 
console.log("The EPSILON");
let y1 = Number.EPSILON;
console.log(y1);
/*JavaScript MAX_VALUE
Number.MAX_VALUE is a constant representing the largest possible number in JavaScript.

Example*/
let y2 = Number.MAX_VALUE;
console.log(y2);
/*Number Properties Cannot be Used on Variables
Number properties belong to the JavaScript Number Object.

These properties can only be accessed as Number.MAX_VALUE.

Using x.MAX_VALUE, where x is a variable or a value, will return undefined: */
let x3 = 6;
console.log(x3.MAX_VALUE);
/*JavaScript MIN_VALUE
Number.MIN_VALUE is a constant representing the lowest possible number in JavaScript.

Example */
let x5 = Number.MIN_VALUE;
console.log(x5);
/*Minimum and Maximum Safe Integers
ES6 added max and min properties to the Number object:

Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER
JavaScript MIN_SAFE_INTEGER
Number.MIN_SAFE_INTEGER represents the minimum safe integer in JavaScript.

Number.MIN_SAFE_INTEGER is -(253 - 1). */
let x6 = Number.MIN_SAFE_INTEGER;
console.log(x6);
/*JavaScript MAX_SAFE_INTEGER
Number.MAX_SAFE_INTEGER represents the maximum safe integer in JavaScript.

Number.MAX_SAFE_INTEGER is (253 - 1).*/
let x7 = Number.MAX_SAFE_INTEGER;
console.log(x7);
// JavaScript POSITIVE_INFINITY
let x8 = Number.POSITIVE_INFINITY;
// POSITIVE_INFINITY is returned on overflow:
let x9 = 1 / 0;
console.log(x8,x9);
// JavaScript NEGATIVE_INFINITY
let x10 = Number.NEGATIVE_INFINITY;
// NEGATIVE_INFINITY is returned on overflow:
let x11 = -1 / 0;
console.log(x10,x11);
/*JavaScript NaN - Not a Number
NaN is a JavaScript reserved word for a number that is not a legal number.*/
 let x12 = Number.NaN;
// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
let x13 = 100 / "Apple";
console.log(c12,c13);
// Safe integers are all integers from -(253 - 1) to +(253 - 1).
// This is safe: 9007199254740991. This is not safe: 9007199254740992.
/*Complete Number Reference
Revised July 2025
Name	Description
constructor	Returns the function that created JavaScript's Number prototype
EPSILON	Returns the difference between 1 and the smallest number greater than 1
isFinite()	Checks whether a value is a finite number
isInteger()	Checks whether a value is an integer
isNaN()	Checks whether a value is Number.NaN
isSafeInteger()	Checks whether a value is a safe integer
MAX_SAFE_INTEGER	Returns the maximum safe integer in JavaScript.
MIN_SAFE_INTEGER	Returns the minimum safe integer in JavaScript
MAX_VALUE	Returns the largest number possible in JavaScript
MIN_VALUE	Returns the smallest number possible in JavaScript
NaN	Represents a "Not-a-Number" value
NEGATIVE_INFINITY	Represents negative infinity (returned on overflow)
POSITIVE_INFINITY	Represents infinity (returned on overflow)
parseFloat()	Parses a string an returns a number
parseInt()	Parses a string an returns a whole number
prototype	Allows you to add properties and methods to an object
toExponential(x)	Converts a number into an exponential notation
toFixed(x)	Formats a number with x numbers of digits after the decimal point
toLocaleString()	Converts a number into a string, based on the locale settings
toPrecision(x)	Formats a number to x length
toString()	Converts a number to a string
valueOf()	Returns the primitive value of a number */