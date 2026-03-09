import styled from 'styled-components'
import createGlobalStyle from 'styled-components';
/*What is CSS-in-JS?
CSS-in-JS is a styling technique where you can write CSS directly in your JavaScript code.

This approach allows you to:

Write CSS using JavaScript
Create component-scoped styles
Use dynamic styles based on props
Avoid CSS class name conflicts*/ 
/*Getting Started
CSS-in-JS is not a part of the React core library, but can be installed using many React build tools, like Vite, Webpack, or Create React App.

To install styled-components, run the following command:

npm install styled-components*/ 
const Style1 = () => {
    const Myheader=styled.h1`
    padding:10px;
    background-color:blue;
    color:white;
    `;


/*Props in Styled Components
Another powerful feature of CSS-in-JS is the ability to use props to make styles dynamic.

Let's create an example where we have two buttons, one primary and one secondary.

We want to base their background color on the value of the btntype prop:*/ 

const Button=styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.btntype === 'primary' ? '#007bff' : '#6c757d'};
  color: white;
  cursor: pointer;
`
    {/* Getting Started
    CSS-in-JS is not a part of the React core library, but can be installed using many React build tools, like Vite, Webpack, or Create React App.
    
    To install styled-components, run the following command:
    
    // npm install styled-components
    
    
    Without CSS-in-JS, you would have to either:

Write CSS in a separate .css file and import it into your React components
Use inline styles
Notice that:

We use the styled object to create components
Styles are written inside template literals (backticks)
You can use regular CSS syntax
    */}

/*Extending Styles
Another way of letting multiple elements have the same styles is to extend existing styled components.

For example, we can create a PrimaryButton and SuccessButton that both have the same styles as the Button component, but they also have separate background colors:*/ 


const Button1 = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

const PrimaryButton = styled(Button1)`
  background-color: #007bff;
`;

const SuccessButton = styled(Button1)`
  background-color: #28a745;
`;

function App() {
  return (
    <div>
    <PrimaryButton>Primary</PrimaryButton>
      <SuccessButton>Success</SuccessButton>
    </div>
  );
}


/*Global Styles
You can also create global styles, which will be given normal class name and will be available for all components:

*/ 

const GlobalStyle1 = createGlobalStyle`
  h2 {
    color: white;
    background-color: purple;
    font-family: Arial, sans-serif;
  }

  .myparagraph1{
    font-family: courier, monospace;
    color: blue;
  }
`;

function Apa(){
    <>
     <GlobalStyle1 />
 <h2>welcome </h2>
<p className='myparagraph1'>This is paragraph styled with styled-components</p>
    </>
}
  return (
    <div>
   <Apa/>
<Myheader>Hi</Myheader>
 <Button btntype="primary">Primary Button</Button>
      <br />
      <br />
      <Button>Secondary Button</Button>
      <br /><br />
      <App/>
    </div>

)
}
/*Component-Scoped Styles
Just like with CSS Modules, styles created in CSS-in-JS are scoped to the component.

They are given unique names and can only be used in the component that imports them.

If we view the source of the page in the example above, the buttons will have unique class names like bSOFjJ and pkxvl, and will be refering to the CSS with the same unique class names in the style section.*/ 

export default Style1
