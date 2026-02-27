// Bitwise Operations in js
/*JavaScript Bitwise Operators
Operator	Name	Description
&	AND	Sets each bit to 1 if both bits are 1
|	OR	Sets each bit to 1 if one of two bits is 1
^	XOR	Sets each bit to 1 if only one of two bits is 1
~	NOT	Inverts all the bits
<<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
>>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
>>>	Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off */
/*Examples
Operation	Result	Same as	Result
5 & 1	1	0101 & 0001	 0001
5 | 1	5	0101 | 0001	 0101
~ 5	10	 ~0101	 1010
5 << 1	10	0101 << 1	 1010
5 ^ 1	4	0101 ^ 0001	 0100
5 >> 1	2	0101 >> 1	 0010
5 >>> 1	2	0101 >>> 1	 0010
JavaScript Uses 32 bits Bitwise Operands
JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.

Before a bitwise operation is performed, JavaScript converts numbers to 32 bits signed integers.

After the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers.
REFER THIS FOR MORE INFO
https://www.w3schools.com/js/js_bitwise.asp */




/*JavaScript BigInt
What is JavaScript BigInt?
BigInt is a JavaScript data type for handling and storing big integer values.

BigInt allows you to work with integers larger than the limit of Numbers.

BigInt can represent an integer of any size, limited only by available memory.

JavaScript Accuracy
JavaScript Numbers are only accurate up to 15 digits: */
let x = 999999999999999n;

// Using the BigInt() constructor with a string:
let y = BigInt("999999999999999");
let x1 = 12345678901234567890n;
let y1 = BigInt("12345678901234567890");
console.log(x,y);
console.log(x1,y1);
/*You can also create a BigInt using the Bigint() constructor with a Number.

Warning !! Numbers are only accurate up to 15 digits.*/ 
/*Numbers are 64-bits Floating Point
All JavaScript Numbers are stored in a 64-bit floating-point format (IEEE 754 standard).

With this standard, large numbers cannot be exactly represented, but will be rounded.

JavaScript can only safely represent integers up to 253-1 (9007199254740991).

JavaScript can only safely represent integers down to -253-1 (-9007199254740991). */
let x5 = Number.MAX_SAFE_INTEGER;
let y2 = Number.MIN_SAFE_INTEGER;
console.log(x5,y2);
// Integers bigger than Number.MAX_SAFE_INTEGER will lose precision:

// Max (accurate)
let x6 = 9007199254740991;

// Max + 10 (inaccurate)
let y3 = x + 10;
// Integers less than than Number.MIN_SAFE_INTEGER will lose precision:

// Min (accurate)
let x7 = -9007199254740991;

// Min - 10 (inaccurate)
let y4 = x - 10;
console.log(x6,y3);
console.log(x7,y4);
// For more example we can refer the https://www.w3schools.com/js/js_bigint.asp this page.
