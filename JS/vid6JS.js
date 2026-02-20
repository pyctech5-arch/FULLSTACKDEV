// conditional  statmnts
/*Conditional Statements
Conditional Statements allow us to perform different actions for different conditions.

Conditional statements run different code depending on true or false conditions.

Conditional statements include:

if
if...else
if...else if...else
switch
ternary (? :)*/ 
/*When to use Conditionals
Use if to specify a code block to be executed, if a specified condition is true
Use else to specify a code block to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative code blocks to be executed
Use (? :) (ternary) as a shorthand for if...else
The if Statement
Use if to specify a code block to be executed, if a specified condition is true.*/ 
if(true){
console.log("This is true");
}
/*The else Statement
Use else to specify a code block to be executed, if the same condition is false. */
let x=23;
if(x<20){
console.log("x is lesser then 20");
}else{
    console.log("x is greater than 20");
}
/*The else if Statement
Use else if to specify a new condition to test, if the first condition is false.*/ 
let age=19;
if(age<18){
console.log ("You are a minor");
}else if (age >= 18 && age < 65){
console.log("You are an adult");
}else{
console.log("You are a senior citizen");
}
/*The break Keyword
When JavaScript reaches a break keyword, it breaks out of the switch block.

This will stop the execution inside the switch block.

No more statements in the switch block will be executed.

It is not necessary to break the last case. The switch ends (breaks) there anyway.

Note
The break keyword is crucial for preventing a "fall-through."

Without break, the code will continue to execute the next case blocks (and the default block if present) even if their values do not match the expression.

The default Keyword
The default keyword specifies a block of code to run if there is no case match.

The default keyword is optional.

The default can act as a fallback: */
/*The switch Statement
Use switch to specify many alternative code blocks to be executed.*/
let day;
let date=new Date().getDay();
switch(date){
case 1:
    console.log("Monday");
    break;
case 2:
    console.log("Tuesday");
    break;
case 3:
    console.log("Wednesday");
    break;
case 4:
    console.log("Thursday");
    break;
case 8:
    console.log("Friday");
    break;
case 6:
    console.log("Saturday");
    break;
case 7:
    console.log("Sunday");
    break;
default:
    console.log("Invalid day number");
}
/*Ternary Operator (? :)
Use (? :) (ternary) as a shorthand for if...else. */
x=0;
(x>0)?console.log("positive"):console.log("negtive");
let price = 10;
let isMember = true;
let discount = isMember ? 0.2 : 0;
let total = price - (price * discount);
console.log("Discount:", discount);
console.log("Total:", total);
// Nested if statement
age=20;
let citizen=true;
if (age>=18){
    if(citizen){
    console.log("You are eligible to vote");
}else{
    console.log("You are not eligible to vote");
}}