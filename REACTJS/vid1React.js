/*Classes
ES6 introduced classes.

A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.

Example*/ 
// A simple class constructor:

class Car {
  constructor(name) {
    this.brand = name;
  }
}
/*Notice the case of the class name. We have begun the name, "Car", with an uppercase character. This is a standard naming convention for classes.

Now you can create objects using the Car class:

Example
Create an object called "mycar" based on the Car class:*/ 
// Note: The constructor function is called automatically when the object is initialized.
/*Method in Classes
You can add your own methods in a class:

Example
Create a method named "present": */
class Car1{
constructor(name){
    this.brand=name;
}
    present(){
    return 'Ihave a '+ this.brand;
}
}

/*As you can see in the example above, you call the method by referring to the object's method name followed by parentheses (parameters would go inside the parentheses).

Class Inheritance
To create a class inheritance, use the extends keyword.

A class created with a class inheritance inherits all the methods from another class:

Example
Create a class named "Model" which will inherit the methods from the "Car" class:*/
class Model extends Car1{
    constructor(name,mod){
        super(name);
        this.model=mod;
    }
    show(){
        return this.present()+', it is a  '+this.model;
    }
}

const mycar=new Model("Ford","Mustang")
console.log(mycar.show());
/*The super() method refers to the parent class.

By calling the super() method in the constructor method, we call the parent's constructor method and get access to the parent's properties and methods.

To learn more about classes, check out our JavaScript Classes section. */


// React ES6 Arrow Functions
/*Arrow Functions
Arrow functions allow us to write shorter function syntax:

ExampleGet your own React.js Server
Before:*/

hello=function(){
    return "Hello World";

}

//  with the arrow function
/*It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:

Example
Arrow Functions Return Value by Default: */ 
hello1 =()=>"hello world2"

/*Note: This works only if the function has only one statement.

If you have parameters, you pass them inside the parentheses:

Example
Arrow Function With Parameters:*/


console.log(hello()+"\n"+hello1());

/*In fact, if you have only one parameter, you can skip the parentheses as well:

Example
Arrow Function Without Parentheses:*/
hlo =(val)=>'hello'+val;
console.log(hlo(" world!!"));
/*React ES6 Variables

Variables
Before ES6 there was only one way of defining your variables: with the var keyword. If you did not define them, they would be assigned to the global object. Unless you were in strict mode, then you would get an error if your variables were undefined.

Now, with ES6, there are three ways of defining your variables: var, let, and const.*/ 
var a=3.2;
/*If you use var outside of a function, it belongs to the global scope.

If you use var inside of a function, it belongs to that function.

If you use var inside of a block, i.e. a for loop, the variable is still available outside of that block.

var has a function scope, not a block scope.

Example:*/

let b = 5.6;

/*let is the block scoped version of var, and is limited to the block (or expression) where it is defined.

If you use let inside of a block, i.e. a for loop, the variable is only available inside of that loop.

let has a block scope.*/ 

// Example const
const c = 5.2;

/*const is a variable that once it has been created, its value can never change.

const has a block scope.

The keyword const is a bit misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object
But you CAN:

Change the elements of constant array
Change the properties of constant object*/ 


/*JavaScript Array map()
The map() Method
The map() method creates a new array with the results of calling a function for every array element.

ExampleGet your own React.js Server
Multiply each number by 2:*/ 

const number=[1,2,3,4];
const double=number.map(x=>x*2);
console.log(double);
