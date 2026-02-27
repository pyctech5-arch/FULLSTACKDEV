import Subscription from './Subsciption';
import Container from '../tamplates/Container';
// import NewSubscription from './NewSubscription/NewSubscription';


function AllSubscription(){
let subscriptions=[
  {
    id:"1",
    date:(new Date('2023','02','23')),
    title:"Montly Subscription",
    Amount:'125.60'
},
 {
  id:"2",
  date:(new Date('2021','09','24')),
  title:"Annual Subscription",
  Amount:'1125.60'
},
{
 id:"3",
 date:(new Date('2025','06','12')),
 title:"Quarterly Subscription",
 Amount:'625.60'
}
]
  // AddSubscriptionHandler=(data)=>{
  //  subscriptions.push(data);
  //  console.log("on add subscription",data)
   
  // }
  return (
    <>
  {/* //   React.createElement('div',{},React.createElement('h2',{},'Lets Start!')) */}
     <Container>
     {/* <NewSubscription onAddSubscription={AddSubscriptionHandler}/> */}
 <Subscription date={subscriptions[0].date} title=
{subscriptions[0].title} amount={subscriptions[0].Amount}/>
  <Subscription date={subscriptions[1].date} title=
{subscriptions[1].title} amount={subscriptions[1].Amount}/>
<Subscription date={subscriptions[2].date} title=
{subscriptions[2].title} amount={subscriptions[2].Amount}/>
   </Container>  

</>
  );
}

export default AllSubscription;
