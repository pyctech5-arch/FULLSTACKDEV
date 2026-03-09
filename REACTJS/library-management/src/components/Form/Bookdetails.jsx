import './Bookdetails.css'
import { useState } from 'react'
const Bookdetails = (props) => {
  // const [bookTitle,SetbookTitle]=useState("");
  // const [userDate,SetuserDate]=useState("");
  // const [userName,SetuserAmount]=useState("");
  const [form, Setform] = useState({bookName: 'Enter Name', bookTitle: 'Enter Book Title'})
  const NamechangeHandler = (events) => {
    //  SetuserAmount(events.target.value)
    // console.log("UserAmount",userName)
    // Setform({...form,bookName:events.target.value})
    // By default paramenter name prevState that the form input only refer to the previous value by sheduling it and not by the bydefault value.
    Setform((prevState) => {
      return { ...prevState, bookName: events.target.value }
    })
    console.log(form);
  }

  const titleChangeHandler = (events) => {
    // SetbookTitle(events.target.value)
    // console.log("bookTitle",bookTitle)
    // Setform({...form,bookTitle:events.target.value})
    Setform((prevState) => {
      return { ...prevState, bookTitle: events.target.value }
    })
    console.log(form);
   

  }


  const onsubmithandler = (events) => {
    events.preventDefault();
    // By calling onsave handler passing the data bookData from formsubscription
    const bookData = {  book: form.bookName,title: form.bookTitle };  
    props.onSave(bookData);
    console.log("on submit", bookData);
  }
  return (
    <form onSubmit={onsubmithandler} className="New_subscription_form">
      <h2 className="New_subscription_title">Book Details</h2>
      <div className="New_subscription_controls">
        <div className="New_subscription_control">

        <div className="New_subscription_control">
          <label>Book</label>
          <input type="text" value={form.bookName} autoFocus onChange={NamechangeHandler}  />
        </div>
          <label>Title</label>
          {/* two way binding using value attribute */}
          <input type="text" placeholder="Enter title"  value={form.bookTitle} onChange={titleChangeHandler} />
        </div>

        <div className="New_subscription_actions">
          <button type="submit" >Add Submission</button>
        </div>
      </div>
    </form>
  )
}

export default Bookdetails;