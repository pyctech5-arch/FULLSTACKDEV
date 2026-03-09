/*What is a Higher Order Component?
A Higher Order Component (HOC) is like a wrapper that adds extra features to your React components. Think of it like putting a case on your phone - the case adds new features (like water protection) without changing the phone itself.

Note: HOCs are functions that take a component and return an enhanced version of that component.

Example: Adding a Border
To demonstrate how HOCs work, let's create a simple example - adding a border to any component:*/ 
// // This is our HOC - it adds a border to any component
function withborder(WrappedComponent){
    return function NewComponent(props)
    {
        return(
            <div style={{border:'2px solid blue',padding:'10px'}}>
                <WrappedComponent {...props}/>
            </div>
        );
    };
}
// Simple component without border
 function Greetings({name}){
    return <h1>Heello,{name}!</h1>
 }
// Create a new component with border
const Greetingwithborder=withborder(Greetings);

function App(){
    return(
        <div>
            <Greetings name="Prashant"/>
            <Greetingwithborder name="Prashant"/>
        </div>
    )
}

const HOC = () => {
  return (
    <div>
      <App/>
    </div>
  )
}
/*In this example:

withBorder is our HOC - it's a function that takes a component
It returns a new component that wraps the original in a div with a border
The original component (Greeting) remains unchanged
We can still use both the original and enhanced versions
*/ 
export default HOC;
