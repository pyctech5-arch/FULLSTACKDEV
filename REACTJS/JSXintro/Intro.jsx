import './Intri.css'
import Intro2 from './Intro2'
const Intro = () => {
    const myelemt=<input type="text" />
  return (
<>
      <pre>
        React JSX
What is JSX?
JSX stands for JavaScript XML.    <br />

JSX allows us to write HTML in React.  <br />

JSX makes it easier to write and add HTML in React.
<br />
Coding JSX <br />
JSX allows us to write HTML elements in JavaScript  and place them in the DOM without any <br />  createElement()  and/or appendChild() methods.
<br />
JSX converts HTML tags into react elements.
<br />
You are not required to use JSX, but JSX makes it <br /> easier to write React applications.
      </pre>
 
{/* Attribute class = className
The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.

Use attribute className instead.

JSX solved this by using className instead. When JSX is rendered, it translates className attributes into class attributes.

Example
Use attribute className instead of class in JSX: */}
<div>
<div className="hi">
    {/* Elements Must be Closed
JSX follows XML rules, and therefore HTML elements must be properly closed.

Example
Close empty elements with /> */}
   <p>
  This is input tag:  {myelemt}
    </p>
      <h2>My Car</h2>
      <p>It is a Ford Mustang.</p>
    </div>
    <br /><br />
    <Intro2/>
</div>

    </>
  )
}

export default Intro
