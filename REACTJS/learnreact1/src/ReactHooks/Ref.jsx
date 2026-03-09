import React, { forwardRef ,useRef} from 'react'

const Ref = () => {
/*React forwardRef
What is forwardRef?
forwardRef lets your component pass a reference to one of its children. It's like giving a direct reference to a DOM element inside your component.

Common uses for forwardRef:

Focusing input elements
Triggering animations
Measuring DOM elements
Integrating with third-party libraries
Basic Example
Here's a simple example of forwarding a ref to an input element:*/

const MyInput=forwardRef((props,ref)=>(
    <input ref={ref} {...props} />
));

function App(){
    const inputRef=useRef();

    const focusinput=()=>{
         inputRef.current.focus();
    };

    return(
    <div>
 <MyInput ref={inputRef} placeholder="Type here.." />
<button onClick={focusinput} >Focus Input</button>
    </div>
)
}
/*In this example:

We wrap our input component with forwardRef
The component receives a ref as its second parameter
The parent can now control the input element directly*/ 
    return ( 
    <div>
      <App/>
    </div>
  )
}

export default Ref
