import './Intri.css'
const Intro2 = () => {
    /*Variables
Variables are also valid expressions. Insert variables in JSX by wrapping it in curly braces { }.*/
/*Note that the attribute value is not wrapped in quotes, this is important when using expressions (JavaScript variables) as attribute values. If you use quotes, JSX will treat it as a string literals and not a JavaScript expression.*/ 
function Car(car){   
    return( 
        <span> {car} </span>
)
}
// Object in function
function Employe(){
    const obj={
        name:"prashant",
        lname:"chavan",
        salary:20000
    }
return(
    <h4>The employee name is {obj.name+" "+obj.lname} and having salary {obj.salary} </h4>
)
}
// A disable can be also write giving boolean values to it ex:disabled{flase}
function button(){
    const  x=()=>{
        alert("Button is clicked!")
    }
    const y="button";
    return(
 <button className={y} disabled onClick={x}> click me to render</button>);
} 
function button1(){
    const  x=()=>{
        alert("Button is clicked!")
    }
    const y="button";
    return(
 <button className={y} onClick={x}> click me to render</button>);
} 


/*The style Attribute
The style attribute in JSX only accepts a JavaScript object with camelCased CSS property names, rather than a CSS string (as in HTML).*/


/*Notice two things about the example above.

The styles are stored in an object.
Style properties are written in camelCase, e.g. fontSize, instead of font-size.
This is an important difference between HTML and JSX.*/ 
const Style=()=>{
const givingCSS={
   color:'red',
   fontSize:'23px'
};
 const y="button";
const u=()=>{
    alert("Welcome to web site!!!")
}
return(
    <>
<button className={y} style={givingCSS}  onClick={u}> click to Welcome</button>
    </>
)
} 

return (
    // <>this is known as Fregment</>
    /*JSX allows you to insert attributes into HTML elements, but there are a few important differences.

class = className
The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.

JSX solved this by using className instead. When JSX is rendered, it translates className attributes into class attributes.*/ 
   
/*Expressions as Attributes
You can also use JavaScript expressions as attribute values. This is very useful for dynamic attributes.*/ 





   <>
    <div className="hi">
    <h3>The above Mustang has {100*1.36} Horse power speed </h3>
    <h1>it has {Car("Farari")}</h1>
    </div>
    <p>{Employe()}</p>
   <p>{button()}</p>
<p>{button1()}</p>
<p>{Style()}</p>
    </>
  )
}

export default Intro2
