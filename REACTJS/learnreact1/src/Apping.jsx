import { useState } from 'react'
import './App.css'
import Hello from './components/Hello';
import Eventbubling from './components/Eventbubling';
import Suspence from './components/Suspence';
function Apping() {
  // Adding the form true the reactjs
  /*HTML Forms vs. React Forms
  In React, form elements like <input>, <textarea>, and <select> work a bit differently from traditional HTML.
  
  In standard HTML, form elements maintain their own value based on user input.
  
  For example, an <input type="text"> field keeps track of its own value in the HTML DOM.
  
  In React, the value of the form element is kept in the component's state property and updated only with the setState() function.
  
  In other words; React provides a way to manage form data through component state, leading to what are known as "controlled components."
  
  */
  /*Controlled Components
  In a controlled component, form data is handled by the React component.
  
  The value of the input element is driven by the React state, and any changes to that value are managed through event handlers that update the state.
  
  When the data is handled by the components, all the data is stored in the component state.
  
  We can use the useState Hook to keep track of each input value and provide a "single source of truth" for the entire application.*/
  const [name, setName] = useState("prashant")
  const [text, setText] = useState("");
  function handlechange(e) {
    setName(e.target.value);
  }
  function handletext(e) {
    setText(e.target.value);
  }
  function handlingsubmit(e) {
    e.preventDefault();
    alert(name);
    alert(text);
  }
  //React Submiting Forms
  /*Submitting Forms
  You can control the submit action by adding an event handler in the onSubmit attribute for the <form>:*/
  function MyForm() {
    return (
      <form action="" onSubmit={handlingsubmit} >
        <label >Enter your name:
          <input type="text"
            value={name}
            onChange={handlechange}
          /> <br />
        </label>
        <label htmlFor="">Enter ur complete info:
          <textarea type="text" placeholder='enter ur complete info' onChange={handletext} value={text} className='textarea' />
        </label>
        <p>Current value is: {name}</p>
        <p>Current value is: {text}</p>

      </form>
    )
  }
  //React Forms - Select 
  /*Select
  A drop down list, or a select box, in React is also a bit different from HTML.
  
  In HTML, the selected value in the drop down list is defined with the selected attribute:*/
  const Myform1 = () => {
    const [selected, setSelected] = useState("Ford");
    const handleChange = (e) => {
      setSelected(e.target.value);
    }
    /*By making these changes to the <select> element, React is able to handle it as any other input element.*/
    return (
      <form action="">
        <select value={selected} onChange={handleChange} >
          <option value="Ford">Ford</option>
          <option value="mustang">mustang</option>
          <option value="Farari">Farari</option>
          <option value="BMW">BMW</option>
        </select>
        <p>The selected value is:{selected}</p>
      </form>
    )
  }

  /*React Forms - Multiple Input Fields*/
  /*Handling Multiple Inputs
  When you have multiple controlled input fields in a form, you can manage their state either by:
  
  1. Using a separate useState call for each input.
  
  2. Using a single useState call with an object to hold all form field values.
  
  We will use the second approach, as it is more common for forms.
  
  Make sure each input field has a unique name attribute.
  
  Also, when initializing the state, use an object instead of a string. If the input fields have no initial value, use an empty object.*/
  const MyFrom2 = () => {
    const [inputs, Setinputs] = useState({});

    function Handlechange(e) {
      const name = e.target.name;
      const value = e.target.value;
      Setinputs(values => ({ ...values, [name]: value }));
    }
    return (
      <form action="">
        <label htmlFor="">FirstName:
          <input type="text" value={inputs.firstName} onChange={Handlechange} name='firstName' />
        </label>
        <label htmlFor="">LastName:
          <input type="text" value={inputs.lastName} onChange={Handlechange} name='lastName' />
        </label>
        <p>Current values:{inputs.firstName} {inputs.lastName}</p>
      </form>
    )
  }
  /*React Forms - Checkbox
Checkbox
For checkboxes, use the checked attribute instead of value to control its state.

We'll use the useState Hook to manage the value of the textarea:

In the handleChange function, use the e.target.type property check if the current input is a checkbox or not.*/ 
function Checkbox(){
    const [inputs, Setinputs] = useState({firstName:"prashant",tomato:true,onion:true});

    const handlechange1 = (e) => {
      const target = e.target;
      const value = e.target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      Setinputs(values=> ({ ...values, [name]: value }))
}
const onsubmithandler = (event) => {

let fillings='';
if(inputs.tomato)fillings+=' tomato ';
if(inputs.onion){
  if(inputs.tomato)fillings+=' and ';
  fillings+=' onion ';
}
if(fillings=='')fillings=' no fillings ';
alert(`${inputs.firstName} wants a burgur with ${fillings}`);
event.preventDefault();
};
return (
  <form action="" onSubmit={onsubmithandler}>
    <label htmlFor="">My name is:
      <input type="text" name='firstName' value={inputs.firstName} onChange={handlechange1} />
    </label>
    <label htmlFor=""> Tomato:
      <input type="checkbox" name='tomato' checked=
        {inputs.tomato} onChange={handlechange1} />
    </label>
    <label htmlFor="">Onion:
      <input type="checkbox" name='onion' checked={inputs.onion} onChange={handlechange1} />
    </label><br />
 <button type='submit'>Submit </button>
  </form>
)}
/*Example Explained
In this example:

The PortalButton component is rendered as a floating button fixed to the bottom-right corner of the screen using a portal
Even though the button exists outside the parent <div> in the DOM, clicking it will:
First trigger the button's own onClick handler (incrementing the counter)
Then trigger the parent div's onClick handler
This demonstrates that event bubbling works through React's component hierarchy, not the DOM hierarchy
*/

/*React Forms - Radio
Radio
Radio buttons are typically used in groups where only one option can be selected.

All radio buttons in a group should share the same name attribute.

You control radio buttons based on whether the radio button's value matches the selected value in your state.*/
function MyForm11() {
  const [selectedFruit, setSelectedFruit] = useState('banana');

  const handleChange = (event) => {
    setSelectedFruit(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`Your favorite fruit is: ${selectedFruit}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Select your favorite fruit:</p>
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="apple" 
          checked={selectedFruit === 'apple'} 
          onChange={handleChange} 
        /> Apple
      </label>
      <br />
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="banana" 
          checked={selectedFruit === 'banana'} 
          onChange={handleChange} 
        /> Banana
      </label>
      <br />
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="cherry" 
          checked={selectedFruit === 'cherry'} 
          onChange={handleChange} 
        /> Cherry
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
  

return (
  <>
    <div>
      <MyForm />
      <Myform1 />
      <MyFrom2 />
      <Checkbox/>
      <MyForm11/>
 <Hello/>
 <Eventbubling/>
 <Suspence/>
    </div>
  </>
);
}

export default Apping;
