import { useState } from 'react'
import Addsubscriber from './components/subscribers/Addsubscriber'
import './App.css'
import Subscriberlist from './components/subscribers/Subscriberlist'
import Container from './components/templates/Container'
function App() {

const [subscrberlist,setsubscriberlist]=useState([]);
const onAddSubscriberHandler=(sname,spincode)=>{
setsubscriberlist((prevState)=>{
return [...prevState,{name:sname,pincode:spincode,id:Math.random().toString()}]
});
}
  return (
  <Container>
    <Addsubscriber onAddSubscriber={onAddSubscriberHandler}
    />
    <Subscriberlist list={subscrberlist} />
  </Container>
  );
}

export default App
