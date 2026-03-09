import './Style1.css'
import style from './style.module.css'

/*Styling React Using CSS
There are many ways to style React with CSS, this tutorial will take a closer look at three common ways:

Inline styling
CSS stylesheets
CSS Modules
Inline Styling
To style an element with the inline style attribute, the value must be a JavaScript object:*/ 
const Style = () => {
    /*JavaScript Object
You can also create an object with styling information, and refer to it in the style attribute:*/ 
  return (
    <div>
      {/* inline styling */}
      {/*camelCased Property Names
Since the inline CSS is written in a JavaScript object, properties with hyphen separators, like background-color, must be written with camel case syntax:  */}
      <h1 style={{color:'blue',backgroundColor:"red",padding:'10px'
      }}>Hello Style!</h1>
      {/* Combine Global and Local Classes */}
<p className={style.bigred}>How are u?</p>
{/* Global Classes */}
<h2 className='myheader' > hello</h2>
    </div>
  )
}

export default Style
