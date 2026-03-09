import { createRoot } from 'react-dom/client';
import './Intri.css'
import React from 'react';
const Intro3 = () => {
    
// conditional statments
/*Conditions - if statements
React supports if statements, but not inside JSX.

To be able to use conditional statements in JSX, you should put the if statements outside of the JSX, or you could use a ternary expression instead:

Option 1:
Write if statements outside of the JSX code: */

function match(){
    const x=4;
    const a=11;
    let y="Apple";
    if(x<10){
        y="Banana";
    }
/*React Components
Components are like functions that return HTML elements.

React Components
Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.

In older React code bases, you may find Class components primarily used.

It is now suggested to use Function components along with Hooks, instead of Class components.

Class components are still supported, check the Class components section for more information.

Create Your First Component
When creating a React component, the component's name MUST start with an upper case letter.

React components returns HTML code.*/ 

// function compnent

return(
    <>
    {/* Components in Files
React is all about re-using code, and it can be a good idea to split your components into separate files.

To do that, create a new file in the src folder with a .jsx file extension and put the code inside it: */}
    <h2>My favorite friut is {y}</h2>
    <h2>My favorite friut is {(a)>x?"Apple":"Banana"}</h2>
    </>

)
}

return (
    /*Before React 16.8, Class components were the only way to track state and lifecycle on a React component. Function components were considered "state-less".

With the addition of Hooks, Function components are now almost equivalent to Class components. The differences are so minor that you will probably never need to use a Class component in React.

Even though Function components are preferred, there are no current plans on removing Class components from React.

This section will give you an overview of how to use Class components in React.*/

/*React Components
Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML via a render function.

Components come in two types, Class components and Function components, in this chapter you will learn about Class components.*/



<div>
        <h1>Hi</h1>
      <p>{match()}</p>
       </div>)
      
}

export default Intro3
