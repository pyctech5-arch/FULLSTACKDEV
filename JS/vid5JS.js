 // Arithmetic Operators
    let x = 5;
    let y = 2;
    let z = x + y; // Addition
    let a = x - y; // Subtraction
    let b = x * y; // Multiplication
    let c = x / y; // Division
    let d = x % y; // Modulus (remainder)
    let e = x ** y; // document.getElementById("demo").innerHTML = Math.pow(x,2);Exponentiation (ES2016)
    let preIncrement = ++x; // Pre-increment: x is incremented before use
    let postIncrement = y++; // Post-increment: y is used before incrementing       
    let preDecrement = --x; // Pre-decrement: x is decremented before use
    let postDecrement = y--; // Post-decrement: y is used before decrementing

    // Assignment Operators
/*JavaScript Assignment Operators
Assignment operators assign values to JavaScript variables.

Given that x = 10 and y = 5, the table below explains the assignment operators:

Operator	Example	Same As	Result
=	x = y	x = y	x = 5
+=	x += y	x = x + y	x = 15
-=	x -= y	x = x - y	x = 5
*=	x *= y	x = x * y	x = 50
**=	x **= y	x = x ** y	x = 100000
/=	x /= y	x = x / y	x = 2
%=	x %= y	x = x % y	x = 0
:	x: 45	size.x = 45	x = 45*/ 
    let f = 10;
    f += 5; // f = f + 5
    f -= 3; // f = f - 3
    f *= 2; // f = f * 2
    f /= 4; // f = f / 4

    // Comparison Operators
    /*Operator	Description	Example
==	equal to	x == 5
===	equal value and equal type	x === 5
!=	not equal	x != 5
!==	not equal value or not equal type	x !== 5
>	greater than	x > 5
<	less than	x < 5
>=	greater than or equal to	x >= 5
<=	less than or equal to	x <= 5*/  
    let g = 10;
    let h = "10";
    console.log(g == h); // true (loose comparison)
    console.log(g === h); // false (strict comparison)
    
    /*JavaScript Logical Operators
Operator	Description
&&	logical and
||	logical or
!	logical not*/
/*Logical Assignment Operators
Operator	Example	Result
&&=	true &&= 10	x = 10
||=	false ||= 10	x = 10
??=	null ??= 10	x = 10*/ 
// The Spread (...) Operator
// The ... operator splits iterables into individual elements.
 let text = "12345";

let min = Math.min(...text);
let max = Math.max(...text);
    let i = true;
    let j = false;
    console.log(i && j); // false
    console.log(i || j); // true
    console.log(!i); // false
    console.log(!j); // true         

