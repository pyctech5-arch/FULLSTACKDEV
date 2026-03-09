
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { useState } from 'react';
import Style from './styling/Style.jsx';
import Style1 from './styling/Style1.jsx';
function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }else{

    return <MissedGoal/>;
  }
}

/*Logical && Operator
Another way to conditionally render a React component is by using the && operator.

In the example below, the heading will only be rendered if the props.brand property is not empty:*/
function Car(props){
return(
  <>
  {props.brand && <h1>My car is a {props.brand}</h1>}
  </>
);
}


/*Ternary Operator
Another way to conditionally render elements is by using a ternary operator.

condition ? true : false
We will go back to the goal example.

Example:
Return the MadeGoal component if isGoal is true, otherwise return the MissedGoal component:*/ 
function Goal1(props) {
  const isGoal = props.isGoal;
  return (
    <>
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  );
}


/*React Lists
In React, you will render lists with some type of loop.

The JavaScript map() array method is generally the preferred method.*/
// using keys
const Mycars=()=>{
  const cars=["Ford","BMW",'Mustang',"fond","innova"]
  return(
    <>
    <h1>My cars</h1>
    <ul>
      {cars.map((car,index)=><li key={index}>Iam a {car}</li>)}
    </ul>
     </>
  )
} 
/*Keys in React Lists
Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.

Keys must be unique among siblings, but they don't have to be unique across the entire application.

Generally, the key should be a unique ID assigned to each item. As a last resort, you can use the array index as a key.*/
const Mycars1=()=>{
  const cars=[{id:1902 ,model:"ford"},
    {id:2902 ,model:"Mustang"},
    {id:2102 ,model:"Thar"},
    {id:1954 ,model:"BMW"},
  ]
  return(
    <>
    <h1>My cars</h1>
    <ul>
      {cars.map((car)=><li key={car.id}> Iam a {car.model}</li>)}
    </ul>
     </>
  )
} 




const root1=createRoot(document.getElementById('root'));
root1.render(
  <>
   <Car brand="Ford Mustang"/>
  <Goal isGoal={true} />
  <App />
  <Goal1 isGoal={false}/>
  <Mycars/>
  <Mycars1/>
  </>
)
const root2=createRoot(document.getElementById("a1"));
root2.render(
  <>
  <Style/>
  <Style1/>
  </>
)