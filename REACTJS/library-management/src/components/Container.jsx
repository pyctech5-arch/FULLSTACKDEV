import './Container.css';
function Container(prop) {
const classes="container "+prop.className;
  return (
    <div>
      
<div className={classes}>{prop.children} </div>
    </div>
  )
}
export  default Container;