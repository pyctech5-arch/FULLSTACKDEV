import React, { useState } from 'react'
import { createPortal } from 'react-dom'
/*Event Bubbling in Portals
Even though a portal renders content in a different part of the DOM tree, events from the portal content still bubble up through the React component tree as if the portal wasn't there.

For example, if a button inside a portal is clicked, the event will still bubble up to the parent component, and the parent component's event handler will be triggered.*/ 

function PortalButton({onClick,children}){
    return createPortal(
        <button
        onClick={onClick}
        style={{
            position:'fixed',
            bottom:'20px',
            right:'20px',
            padding:'10px',
            background:'blue',
            color:'white'
        }}
        >
{children}
        </button>,
        document.body
    );
}

function App(){
    const[count1,Setcount1]=useState(0);  const[count2,Setcount2]=useState(0);
return(
    <div style={{
   padding: '20px',
        border: '2px solid black',
        margin: '20px'
    }}
    onClick={()=>{
        Setcount1(c=>c+1);
    }}>
         <h2>Div Clicked: {count1}</h2>
      <h2>Button Clicked: {count2}</h2>      
      <p>The floating button is rendered outside this box using a portal,
          but its clicks still bubble up to this parent div!</p>
      <p>Try to click the div element as well, to see the count increase</p>
      <PortalButton
      onClick={(e)=>{
        // this run first
        Setcount2(c=>c+1);
      }}>
Floating button
      </PortalButton>
    </div>
);
}
/*Example Explained
In this example:

The PortalButton component is rendered as a floating button fixed to the bottom-right corner of the screen using a portal
Even though the button exists outside the parent <div> in the DOM, clicking it will:
First trigger the button's own onClick handler (incrementing the counter)
Then trigger the parent div's onClick handler
This demonstrates that event bubbling works through React's component hierarchy, not the DOM hierarchy*/ 
const Eventbubling = () => {
  return (
    <div>
      <App/>
    </div>
  )
}

export default Eventbubling
