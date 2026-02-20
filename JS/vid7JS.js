for (let i = 0; i < 5; i++) {
    console.log("The number is " + i);
}
/* The javascript loops
 The for statement creates a loop with 3 optional expressions:
exp1 sets a variable before the loop starts (let i = 0).

exp2 defines the condition for the loop to run (i must be less than 5).

exp3 increases a value (i++) each time the code block has been executed.
 for (expr1; expr2; expr) {
    code block to be executed
 }
 exp1 is executed one time before the execution of the code block.
 exp2 defines the condition for executing the code block.
 exp3 is executed every time the code block has been executed.*/
/*The While Loop
The while loop loops through a block of code as long as a specified condition is true. */
let i=0;
  while (i < 10) {
  console.log("The number is " + i);
  i++;
}
do{
console.log("the nummber whitch is on i "+i)
}while(i>10);
const cars=["BMW","Volvo","Saab","Ford"];
for(let i=0;i<cars.length;i++){
    console.log(cars[i]);
}
// 
// var i = 5;
// for (var i = 0; i < 10; i++) { 
//  // some statements
// }   outputs:10

// let i = 5;

// for (let i = 0; i < 10; i++) {
//   // some code
// }

// // Here i is 5