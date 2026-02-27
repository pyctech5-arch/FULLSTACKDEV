// import './FormSubscription.css'
// import { useState } from 'react'
// const FormSubscription = (props) => {
//   // const [userTitle,SetuserTitle]=useState("");
//   // const [userDate,SetuserDate]=useState("");
//   // const [userAmount,SetuserAmount]=useState("");
//   const [form, Setform] = useState({ userTitle: 'Enter subscription title', userDate: '', userAmount: 'Enter amount' })

//   const titleChangeHandler = (events) => {
//     // SetuserTitle(events.target.value)
//     // console.log("userTitle",userTitle)
//     // Setform({...form,userTitle:events.target.value})
//     Setform((prevState) => {
//       return { ...prevState, userTitle: events.target.value }
//     })
//     console.log(form);

//   }
//   const dateChangeHandler = (events) => {
//     // SetuserDate(events.target.value)
//     // console.log("userDate",userDate)
//     // Setform({...form,userDate:events.target.value})
//     Setform((prevState) => {
//       return { ...prevState, userDate: events.target.value }
//     })
//     console.log(form);
//   }
//   const AmountChangeHandler = (events) => {
//     //  SetuserAmount(events.target.value)
//     // console.log("UserAmount",userAmount)
//     // Setform({...form,userAmount:events.target.value})
//     Setform((prevState) => {
//       return { ...prevState, userAmount: events.target.value }
//     })
//     console.log(form);
//   }

//   const onsubmithandler = (events) => {
//     events.preventDefault();
//     const newSubscription = { title: form.userTitle, date: new Date(form.userDate), amount: form.userAmount };
//     props.onSave(newSubscription);
//     console.log("on submit", newSubscription);
//   }
//   return (
//     <form onSubmit={onsubmithandler} className="New_subscription_form">
//       <h2 className="New_subscription_title">New Subscription</h2>
//       <div className="New_subscription_controls">
//         <div className="New_subscription_control">
//           <label>Title</label>
//           {/* two way binding using value attribute */}
//           <input type="text" placeholder="Enter title" autoFocus value={form.userTitle} onChange={titleChangeHandler} />
//         </div>

//         <div className="New_subscription_control">
//           <label>Date</label>
//           {/* we can also make this between time limit using min and max attributes */}
//           <input type="date" value={form.userDate} onChange={dateChangeHandler} />
//         </div>

//         <div className="New_subscription_control">
//           <label>Amount</label>
//           <input type="text" value={form.userAmount} onChange={AmountChangeHandler} placeholder="0.00" />
//         </div>

//         <div className="New_subscription_actions">
//           <button type="submit" >Add Submission</button>
//         </div>
//       </div>
//     </form>
//   )
// }

// export default FormSubscription;