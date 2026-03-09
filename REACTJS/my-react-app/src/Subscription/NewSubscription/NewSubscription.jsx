import './NewSubscription.css'
import { useState } from 'react';
import FormSubscription from './FormSubscription'
function NewSubscription(props) {
    // Assuming that we have the data from the subscription and and handling that true the below function.
    const [showform,setshowform]=useState(false)
const onSaveHandler=(data)=>{
 const subscriptionData={id:Math.random().toString(),...data}
 props.onAddSubscription(subscriptionData);
 setshowform(false)
}
const showformHandler=()=>{
  setshowform(true);
  console.log('show form',showform);
}
const closeformHandler=()=>{
  setshowform(false);
  console.log('form removed',showform);
}
return (
    <div className='new-subscription'>
    {showform && <FormSubscription onSave={onSaveHandler} onSubmit={closeformHandler} onCancel={closeformHandler}/>}  
     <button className='b responsive' onClick={showformHandler} type='button'>Add New</button>
    </div>
  )
}

export default NewSubscription
