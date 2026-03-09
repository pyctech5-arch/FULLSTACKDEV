import './Subscriptonlist.css'
import Subscription from './Subsciption'
const Subscriptionlist = (props) => {

    if (props.subscriptions.length === 0){return <h3 className='list_no_data'>No data Found!!</h3>;}
    return (
        <ul className="list">
            {props.subscriptions.map((subscription) =>
                //  key is the reserved property for using unique key
                <Subscription key={subscription.id} date={subscription.date} title=
                    {subscription.title} amount={subscription.Amount} />)}
        </ul>
        
    )
}

export default Subscriptionlist;

