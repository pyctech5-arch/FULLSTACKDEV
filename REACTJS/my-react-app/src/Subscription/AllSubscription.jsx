import './AllSubscription.css'
import Container from '../tamplates/Container';
import NewSubscription from './NewSubscription/NewSubscription';
import { useState, useEffect } from 'react';
import Filter from './Filter';
import Subscriptionlist from './Subscriptionlist';
import SubscriptionChart from './SubscriptionChart';
// this is concontrolled component whtch has js code most then jsx code
const INITIAL_SUBSCRIPTION = [
  {
    id: "1",
    date: (new Date(2023, 2, 23)),
    title: "Montly Subscription",
    Amount: '125.60'
  },
  {
    id: "2",
    date: (new Date(2021, 9, 24)),
    title: "Annual Subscription",
    Amount: '1125.60'
  },
  {
    id: "3",
    date: (new Date(2023, 10, 12)),
    title: "Quarterly Subscription",
    Amount: '625.60'
  }
]

function AllSubscription() {
  const [subscriptions, setSubscriptions] = useState(INITIAL_SUBSCRIPTION)
  const [filteryear, setfilteryear] = useState('2020');

useEffect(()=>{
    if (localStorage.getItem('filtered year')){
      setfilteryear(localStorage.getItem('filtered year'));
      console.log('in useEffect',localStorage.getItem('filtered year'));
  }
},[filteryear]); 

  const AddSubscriptionHandler = (data) => {
    //subscription.push(data);
    setSubscriptions(prevState => { return [data, ...subscriptions] })
    console.log("on add subscription", subscriptions);
  };

  const onFilterchangeHandler = (data) => {
    setfilteryear(data);
    localStorage.setItem('filtered year', data)
    console.log('filter change handler', data);
  };

  const filtersubscriptions = subscriptions.filter((item) => {
    return item.date.getFullYear().toString() === filteryear
  })

  return (

    <Container>
      {/* //   React.createElement('div',{},React.createElement('h2',{},'Lets Start!')) */}

      <NewSubscription onAddSubscription={AddSubscriptionHandler} />
      <Filter onFilterchange={onFilterchangeHandler} selectfilter={filteryear} />
      <SubscriptionChart filteredsubscriptions={filtersubscriptions} />
      <Subscriptionlist subscriptions={filtersubscriptions} />

    </Container>
  );
}

export default AllSubscription;

// This Below will done in parent element like in AllSubscription 
{/* Using && operator */ }
{/* {filtersubscriptions.length == 0 && <h3>Sorry No data Found!</h3> }
{filtersubscriptions.length != 0 && filtersubscriptions.map((subscription) =>
        //  key is the reserved property for using unique key
        <Subscription key={subscription.id} date={subscription.date} title=
          {subscription.title} amount={subscription.Amount} />)} */}


{/* Using Ternary operator */ }
{/* {filtersubscriptions.length == 0 ? <h3>Sorry No data Found!</h3> : filtersubscriptions.map((subscription) =>
        //  key is the reserved property for using unique key
        <Subscription key={subscription.id} date={subscription.date} title=
          {subscription.title} amount={subscription.Amount} />)} */}


{/* {filtersubscriptions.map((subscription)=>
      //  key is the reserved property for using unique key
      <Subscription key={subscription.id} date={subscription.date} title=
{subscription.title}  amount={subscription.Amount} />)} */}

{/* <Subscription date={subscriptions[0].date} title=
{subscriptions[0].title} amount={subscriptions[0].Amount}/>
  <Subscription date={subscriptions[1].date} title=
{subscriptions[1].title} amount={subscriptions[1].Amount}/>
<Subscription date={subscriptions[2].date} title=
{subscriptions[2].title} amount={subscriptions[2].Amount}/> */}