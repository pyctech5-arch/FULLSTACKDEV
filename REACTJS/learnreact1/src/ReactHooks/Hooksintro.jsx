import { useState } from "react";
import UseEffect from "./UseEffect";
import UseContaxt from "./UseContaxt";
import UseRef from "./UseRef";
import UseReducer from "./UseReducer";
import CustomHook from "./CustomHook";

/*React Hooks
Hooks allow functions to have access to state and other React features without using classes.

They provide a more direct API to React concepts like props, state, context, refs, and lifecycle.

What is a Hook?
Hooks are functions that let you "hook into" React state and lifecycle features from functional components.*/ 

/*You must import Hooks from react.

Here we are using the useState Hook to keep track of the application state.

State generally refers to application data or properties that need to be tracked.

Hook Rules
There are 3 rules for hooks:

Hooks can only be called inside React function components.
Hooks can only be called at the top level of a component.
Hooks cannot be conditional

Custom Hooks
If you have stateful logic that needs to be reused in several components, you can build your own custom Hooks.
*/ 

/*Initialize useState
We initialize our state by calling useState in our function component.

useState accepts an initial state and returns two values:

The current state.
A function that updates the state.*/ 
function MyCar() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}

const Hooksintro = () => {
    const [color,Setcolor]=useState('pink');
    
  return (
   <>
   <div>
      {/* example usestate */}
<h3>My favoutite color is {color}</h3>
    <button onClick={()=>Setcolor("Red")}>Red</button>
 <button onClick={()=>Setcolor("Blue")}>Blue</button>
  <button onClick={()=>Setcolor("Yellow")}>Yellow</button>
    </div>
    <CustomHook/>
    <MyCar/>
    <UseEffect/>
    <UseContaxt/>
    <UseRef/>
    <UseReducer/>
   </> 
  )
}

export default Hooksintro;
