import { createContext, useContext, useState } from "react";

/*React Context
React Context is a way to manage state globally.

It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

The Problem
State should be held by the highest parent component in the stack that requires access to the state.

To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.

To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".
*/
/*Now, all components in this tree will have access to the user Context.

Use the useContext Hook
In order to use the Context in a child component, we need to access it using the useContext Hook.

First, include the useContext in the import statement:*/ 


/*The Solution
The solution is to create context.

Create Context
To create context, you must Import createContext and initialize it:*/   

/*Next we'll use the Context Provider to wrap the tree of components that need the state Context.

Context Provider
Wrap child components in the Context Provider and supply the state value.*/ 
const UseContaxt = () => {
    const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Linus");
return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
 const user=useContext(UserContext);
    return (
    <>
      <h1>Component 3</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}


  return (
    <div>
      <Component1/>
    </div>
  )
}

export default UseContaxt
