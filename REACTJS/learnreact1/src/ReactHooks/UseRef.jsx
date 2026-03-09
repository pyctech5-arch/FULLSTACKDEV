import { useEffect, useRef, useState } from "react"

const UseRef = () => {
    /*React useRef Hook
The useRef Hook allows you to persist values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.

Does Not Cause Re-renders
If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

To avoid this, we can use the useRef Hook.

*/ 
function App(){
    const [invalue,setvalue]=useState('');
    /*useRef() only returns one item. It returns an Object called current.

When we initialize useRef we set the initial value: useRef(0).*/ 
    const count=useRef(0);
    useEffect(()=>{
        count.current=count.current+1;
    });
    
    return (
        <div>
   <p>Type in inut field</p>   
    <input type="text"
    value={invalue}
    onChange={(e)=>setvalue(e.target.value)}
    />
    <h1>Render Count:{count.current}</h1>  
    </div>
  );
}
/*Accessing DOM Elements
The useRef Hook is often used to access DOM elements directly.

First, we create a ref using the useRef Hook: const inputElement = useRef();.

Then, we attach the ref to a DOM element using the ref attribute in JSX: <input type="text" ref={inputElement} />.

Finally, we can access the DOM element using the current property: inputElement.current.*/

function App1(){
    const inputelement=useRef();
    
    const focusInput=()=>{
        inputelement.current.focus();
    };
    return(
        <>
        <input type="text" ref={inputelement} /><br />
        <button onClick={focusInput}>focus button </button>
        <br /><br />
        </>
    );
}
/*Tracking State Changes
The useRef Hook can also be used to keep track of previous state values.

This is because we are able to persist useRef values between renders. */ 

function App3() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}
/*This time we use a combination of useState, useEffect, and useRef to keep track of the previous state.

In the useEffect, we are updating the useRef current value each time the inputValue is updated by entering text into the input field.

*/ 
return(
    <>
    <App/>
    <App1/>
    <App3/>
</>
)
}


export default UseRef
