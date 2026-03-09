import { createRoot } from 'react-dom/client'
import React from 'react';
import './index.css'
import Car3 from './JSXintro/Cthrough';
/*To be able to use the Car component, you have to import the Vehicle.jsx file in your application.*/
import App from './App';
// import React, { StrictMode } from 'react'
// import App from './App';
/*As you can see in the first example, JSX allows us to write HTML directly within the JavaScript code.

JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.*/ 
/*Expressions in JSX
With JSX you can write expressions inside curly braces { }.

The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result:*/ 
// const mytable = <h1>I Love JSX! {10*100} times</h1>;
// const mytable=React.createElement('h1',{},"hello world")
// const mytable=(
//  <> 
//   <ul>
//     <li>Apples</li>
//     <li>Bananas</li>
//     <li>Papayas</li>
//   </ul>
// </>
// )
// const mytable = <input type="text" />;
// EX:Function true component
// Ex:using props to pass values
function Car(props) {
  const model = "Mustang";
  return (
    <>
      <h2>It's Me Car</h2>
      <p>Your car {props.brand} {model}.</p>
    </>
  );
}
function Garage(){
    return(
 <>
       <h3>Who lives in My garage?</h3>
        <Car barnd="Ford" />
        <Car barnd="BMW" />
  </> 
    )
}
/*Component Constructor
If there is a constructor() function in your component, this function will be called when the component gets initiated.

The constructor function is where you initiate the component's properties.

In React, component properties should be kept in an object called state.

You will learn more about state later in this tutorial.

The constructor function is also where you honor the inheritance of the parent component by including the super() statement, which executes the parent component's constructor function, and your component has access to all the functions of the parent component (React.Component).*/
// example of the Class component
class Hello extends React.Component{
    constructor(props){
        super(props);
        /*React Class components have a built-in state object.

You might have noticed that we used state earlier in the component constructor section.

The state object is where you store property values that belongs to the component.

When the state object changes, the component re-renders.*/

        this.state={color:"red"};
    }
    render(){
        /*props
        Another way of handling component properties is by using props.
        
        Props are like function arguments, and you send them into the component as attributes.*/   

        return(
            <h2>I hava a {this.state.color} car and Having {this.props.wheels} color wheels</h2>
        )
        }
        }
/*Using the state Object
Refer to the state object anywhere in the component by using the this.state.propertyname syntax:*/ 
class Person extends React.Component{
 constructor(props){
    super(props);
    this.state={
    name:"prahant",
    qualification:"Btech",
    regno:"222NR45CS546",
  year:2025
    };
    /*Changing the state Object
To change a value in the state object, use the this.setState() method.

When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s).*/
 }
 Anotherperson=()=>{
   this.setState({name:"Rahul"}); 
 }
    render(){
        return(
            <>
<h2>The person Details </h2>
     <p>We Have Student named {this.state.name}</p>
<button onClick={this.Anotherperson}>Click to Change  Name</button>
            </>
        );
    }
}

   {/* The example above might be a bit useless, but if we change the content of the Car component, by using arguments, it makes more sense:

Example
Use the Car component to display two different cars: */}

const root1=createRoot(document.getElementById('root'));
root1.render(
<>
{/* // example of the Car component */}
<Hello wheels="Black" />
<Person/>
<App/>
<Garage />
<Car3/>
</>
 
);
  /*Always use the setState() method to change the state object, it will ensure that the component knows its been updated and calls the render() method (and all the other lifecycle methods).

Lifecycle of Components
Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

The three phases are: Mounting, Updating, and Unmounting.*/ 
 
/*Mounting
Mounting means putting elements into the DOM.

React has four built-in methods that gets called, in this order, when mounting a component:

constructor()
getDerivedStateFromProps()
render()
componentDidMount()
The render() method is required and will always be called, the others are optional and will be called if you define them.

constructor
The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.

The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).*/ 
class Color extends React.Component{
    constructor(props){
       super(props);
       this.state={favoritecolor:"red"}
    }
     render(){
        return(
            <h1>My favorite color is {this.state.favoritecolor}</h1>
        )
     }
}

/*Props
Another way of handling component properties is by using props.

Props are like function arguments, and you send them into the component as attributes.*/
// Accesing the class properties of parent  
class Parent extends React.Component{
  constructor(props){
   super(props);
  }
  render(){
    return <h2>I have the  car of  the  Model {this.props.model}</h2>
  }
}

/*Example
Use the Car component inside the Garage component:
Class inheritence*/
class Car2 extends React.Component{
  render(){
    return <h2>Iam a car</h2>
  }
} 
class Garage1 extends React.Component{
  render(){
    return( <div>
      <h1>Who lives in my garaege?</h1>
      <Car2/>
    </div>);
  }
}
const root2= createRoot(document.getElementById("hi"));
root2.render(
  <>
<Color/>
<Parent model="Mustang"/>
<Garage1/>
  </>
);
/*getDerivedStateFromProps
The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.

This is the natural place to set the state object based on the initial props.

It takes state as an argument, and returns an object with changes to the state.

The example below starts with the favorite color being "red", but the getDerivedStateFromProps() method updates the favorite color based on the favcol attribute:*/
/*render
The render() method is required, and is the method that actually outputs the HTML to the DOM.*/ 
// class state to props conversion
// we can also update this value once again
class  State3 extends React.Component{
  constructor(props){
    super(props);
  this.state={
    favoritecolor:"red"
  };
}
static getDerivedStateFromProps(props,state){
  return{favoritecolor:props.favcol}
  }

  render(){
    return(
       <>
      <h3>The 
       favorite car i like is of {this.state.favoritecolor} color </h3>
        </>
    );
  }
}

/*componentDidMount
The componentDidMount() method is called after the component is rendered.

This is where you run statements that requires that the component is already placed in the DOM.*/ 
class State2 extends React.Component{
  constructor(props){
       super(props);
       this.state={
        favoritecolor:"blue"
       }       
  }
  componentDidMount(){
    setTimeout(()=>{
   this.setState({
    favoritecolor:"pink"   })
    },3000)
  }
render(){
  return(
    <h3>My faourite color is in cars {this.state.favoritecolor} </h3>
  );
}
}
/*Updating
The next phase in the lifecycle is when a component is updated.

A component is updated whenever there is a change in the component's state or props.

React has five built-in methods that gets called, in this order, when a component is updated:

getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()
The render() method is required and will always be called, the others are optional and will be called if you define them.

getDerivedStateFromProps
Also at updates the getDerivedStateFromProps method is called. This is the first method that is called when a component gets updated.

This is still the natural place to set the state object based on the initial props.

The example below has a button that changes the favorite color to blue, but since the getDerivedStateFromProps() method is called, which updates the state with the color from the favcol attribute, the favorite color is still rendered as blue:*/ 

/*shouldComponentUpdate
In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.

The default value is true.

The example below shows what happens when the shouldComponentUpdate() method returns false:*/ 
class  State4 extends React.Component{
  constructor(props){
    super(props);
  this.state={
    favoritecolor:"blue"
  };
}
  shouldComponentUpdate(){
    return true;
  }
  changeColor=()=>{
this.setState({favoritecolor:"yellow"})
  }
  render(){
    return(
       <>
      <h3>The 
       favorite car i like is of {this.state.favoritecolor} color </h3>
      <button onClick={this.changeColor}>Change ur Color</button>
        </>
    );
  }
}

/*getSnapshotBeforeUpdate
In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.

If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.

The example below might seem complicated, but all it does is this:

When the component is mounting it is rendered with the favorite color "red".

When the component has been mounted, a timer changes the state, and after one second, the favorite color becomes "yellow".

This action triggers the update phase, and since this component has a getSnapshotBeforeUpdate() method, this method is executed, and writes a message to the empty DIV1 element.

Then the componentDidUpdate() method is executed and writes a message in the empty DIV2 element:*/ 

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  getSnapshotBeforeUpdate(prevProps,prevState) {
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favoritecolor;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}
const root3=createRoot(document.getElementById("a2"));
root3.render(
  <>
<State3 favcol="Blue"/>
 <State2/> 
 <State4 favcol="Red"/>
 <Header />
  </>
);

/*class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favoritecolor;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}*/
/*Pass Multiple Properties
You can send as many properties as you want.

Every attribute is sent to the Car component as object properties.*/ 
// Passing multiple props
function Chudail(car){
  
  return(
    <>
    <p>my Car is of {car.color} color</p>
    <p>my car speed is {car.speed} Horse power</p>
    <p>My Car model is {car.model} model  </p>
    <p>And My Car pet name is {car.petname}</p>
    <p>My friend Have car Mustang {car.year}</p>
    <p>My favorite foods are {car.foods[0]} {car.foods[1]} {car.foods[2]}</p>
    <p>I also had Friend of mine with the name {car.friend.name} {car.friend.lname} and born in year {car.friend.birth}</p>
    </>
  )
}

function Friend1(props){
return <h3>Hello bro it's me {props.name}</h3>
}
function Home(){
return(
  <>
  <h1>See who is came here?!!</h1>
  <Friend1 name="Tarun"/>
  </>
)
}

// Different Data Types
// numbers and variables of props are defined in the {}
const x="Fararri";
/*Array Props
Array props can be accessed using the indexes.*/ 
const food=['idli','dosa','polav','eggfriedrice'];
/*Object Props
The component treats objects like objects, and you can use the dot notation to access the properties.*/ 
const friend={name:"danush",lname:"tiwari",birth:"2003"}



/*Destructuring Props
You can limit the properties a component receives by using destructuring.*/
/*Destructuring ...rest
When you don't know how many properties you will receive, you can use the ...rest operator.

Meaning: you can specify the properties you need, and the rest will be stored in an object.*/
const Employee=({name,lname,...rest})=>{
  return(
    <h4>We have Employee named {name} {lname} And having the salary of {rest.salary}.</h4>
  )
}


/*Props Children
In React, you can send the content between the opening and closing tags of a component, to another component.

This can be accessed in the other component using the props.children property.*/ 
function Son(props) {
  return (
    <div style={{background: 'lightgreen'}}>
      <h2>Son</h2>
      <div>{props.children}</div>
    </div>
  );
}

function Daughter(props) {
  const {brand, model} = props;
  return (
    <div style={{background: 'lightblue'}}>
      <h2>Daughter</h2>
      <div>{props.children}</div>
    </div>
  );
}

function Parent1() {
  return (
    <div>
      <h1>My two Children</h1>
      <Son>
        <p>
          This was written in the Parent component,
          but displayed as a part of the Son component
        </p>
      </Son>
      <Daughter>
        <p>
          This was written in the Parent component,
          but displayed as a part of the Daughter component
        </p>
      </Daughter>
    </div>
  );
}


/*React Events
Just like HTML DOM events, React can perform actions based on user events.

React has the same events as HTML: click, change, mouseover etc.

Adding Events
React events are written in camelCase syntax:

onClick instead of onclick.

React event handlers are written inside curly braces:

onClick={shoot}  instead of onclick="shoot()".*/ 

const Hitme=()=>{
  /*Passing Arguments
To pass an argument to an event handler, use an arrow function.*/ 
  const short=(a,b)=>{
    alert(b.type);
  }
/*Passing Arguments
To pass an argument to an event handler, use an arrow function.*/ 
  return(
    <button type='button' onClick={(event)=>short("Exellent short!!",event)}> Hit me</button>
  );
}

const root4=createRoot(document.getElementById("a4"));
root4.render(
  <>
<Chudail color="black" speed={191*5/2} model={x} petname="munna" year={1970} foods={food} friend={friend}/>
<Home/>
<Employee name="Pramod" lname="pillay" salary={20000} />
  <Parent1/>
  <Hitme/>
 
    </>
)






