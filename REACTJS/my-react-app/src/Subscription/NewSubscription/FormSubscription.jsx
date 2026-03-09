import './FormSubscription.css'
import { useEffect, useReducer, useState } from 'react'
import styled from 'styled-components';
// const Formcontrol = styled.div`
// & div{
//   display: flex;
//   flex-direction: column;
//   gap: 1.25rem;
// }
//  & title{text-align: center;
//   margin-bottom: 1.5rem;
//   font-size: 1.5rem;
//   font-weight: 700;
//   color: #444;}

// {
//   display: flex;
//   flex-direction: column;
// }

// & label{
//   font-weight: 600;
//   margin-bottom: 0.35rem;
//   letter-spacing: 0.5px;
//   color:${props=>props.inValid?'red':'black'}
// }

// & input{
//   padding: 0.75rem 1rem;
//   border: 1px solid  ${props=>props.inValid?'red':'#ccc'};
//   border-radius: 8px;
//   font-size: 1rem;
//   transition: all 0.2s ease;
//   background: rgba(255,255,255,0.9);
// }

// & input:focus{
//   outline: none;
//   box-shadow: 0 0 0 3px rgba(0,123,255,0.3);
//   border-color: #007bff;
// }

// & input::placeholder{
//   color: #999;
// }
// `

const formReducerFn=(lateststate,action)=>{
  console.log("in form reducer f");
  if(action.type === 'TITLE'){

      return { ...lateststate, userTitle:action.val }
  }else if(action.type=='DATE'){
    return {...lateststate,userDate:action.val}
  }else if(action.type=='AMOUNT'){
    return {...lateststate,userAmount:action.val}
  }
    return {userTitle: 'Enter subscription title', userDate: '', userAmount: 'Enter amount'}
}

const FormSubscription = (props) => {
  // const [userTitle,SetuserTitle]=useState("");
  // const [userDate,SetuserDate]=useState("");
  // const [userAmount,SetuserAmount]=useState("");

 const [formreducer,setformreducer]=useReducer(()=>{formReducerFn},{userTitle: 'Enter subscription title', userDate: '', userAmount: 'Enter amount' })
  const [form, Setform] = useState({ userTitle: 'Enter subscription title', userDate: '', userAmount: 'Enter amount' });
  const [isvalid, Setisvalid] = useState(true);

  useEffect(()=>{
const timeId=setTimeout(()=>{
console.log("Using effect");
  if(form.userTitle.trim().length>0){
    Setisvalid(true);  
    }
  },500);
  return ()=>{
    console.log("clean up function");
     clearTimeout(timeId);
  }
  },[form.userTitle]);   

  const titleChangeHandler = (events) => {
    // if (events.target.value.trim().length > 0){ 
    //   Setisvalid(true);
    // api
    // }
    // SetuserTitle(events.target.value)
    // console.log("userTitle",userTitle)
    // Setform({...form,userTitle:events.target.value})
    setformreducer({type:'TITLE',val:events.target.value })
    Setform((prevState) => {
      return { ...prevState, userTitle: events.target.value }
    })
    console.log(form);
  }

  const dateChangeHandler = (events) => {
    // SetuserDate(events.target.value)
    // console.log("userDate",userDate)
    // Setform({...form,userDate:events.target.value})
        setformreducer({type:'DATE',val:events.target.value })
    Setform((prevState) => {
      return { ...prevState, userDate: events.target.value }
    })
    console.log(form);
  }

  const AmountChangeHandler = (events) => {
    //  SetuserAmount(events.target.value)
    // console.log("UserAmount",userAmount)
    // Setform({...form,userAmount:events.target.value})
    // By default paramenter name prevState that the form input     only refer to the previous value by sheduling it and not by the bydefault value.
        setformreducer({type:'AMOUNT',val:events.target.value })
    Setform((prevState) => {
      return { ...prevState, userAmount: events.target.value }
    })
    console.log(form);
  }

  const onsubmithandler = (events) => {
    events.preventDefault();
    if (form.userTitle.trim().length == 0) {
      Setisvalid(false);
      return

    }
    // By calling onsave handler passing the data subscription from formsubscription
    const Subscription = { date: new Date(form.userDate), title: form.userTitle, Amount: form.userAmount };
    props.onSave(Subscription);
    //  using this the form is automatically closes after submition of form
    props.onCancel();
    console.log("on submit", Subscription);
  }

  return (
    <form onSubmit={onsubmithandler} className="New_subscription_form">
      <h2 className="New_subscription_title">New Subscription</h2>

      <div className="New_subscription_controls ">
        {/* Dynamic classes and abcktics added as shown below */}
        <div className={`New_subscription_control ${!isvalid? 'invalid':''}`}>
{/* style={{color:!isvalid?'red':'black'}} */}
          {/* style={{borderColor:!isvalid?'red':'black'}} */}
          {/* <label>Title</label> */}
          {/* two way binding using value attribute */}
          {/* <input type="text" placeholder="Enter title" autoFocus value={form.userTitle} onChange={titleChangeHandler} />
        </div> */}
        {/* <Formcontrol $inValid={!isvalid}> */}
        <label>Title</label> 
<input type="text" placeholder="Enter title" autoFocus value={form.userTitle} onChange={titleChangeHandler} />
        {/* </Formcontrol> */}
    </div>
        <div className="New_subscription_control">
          <label>Date</label>
          {/* we can also make this between time limit using min and max attributes */}
          <input type="date" value={form.userDate} onChange={dateChangeHandler} />
        </div>

        <div className="New_subscription_control">
          <label>Amount</label>
          <input type="text" value={form.userAmount} onChange={AmountChangeHandler} placeholder="0.00" />
        </div>

        <div className="New_subscription_actions">
          <button type="submit"  >Save</button>
          {/* this will done after clicking this button the form will be removed */}
  <button id='cancel' type="button" onClick={props.onCancel} >cancel</button>
        </div>
      </div>
    </form>
  )
}

export default FormSubscription;