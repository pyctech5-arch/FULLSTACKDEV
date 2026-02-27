import './Subscription.css';
import Container from '../tamplates/Container';
import Subscriptiondate from './Subscriptiondate';
import { useState } from 'react';

function Subscription(props) {
    const [title, setTitle] = useState(props.title)
    const onClickHandler = () => {
        setTitle("Subscription purchased!!");
        console.log("on button clicked!", title);
    }

    return (

        /*Dynamic data rendering
            
            using same code or components multiple times instead of hard coded values we can also use variables ex:in Subscription.
            */
        /*Passing date using props:whitch used for adding data from one component to Another here wecan also acess the custom components also here we are aceccing App components*/
        <Container className='subscription'>
            <Subscriptiondate date={props.date} />
            <h2 className='subscription_title'>{title}</h2>
            <div className='subscription_price'>{props.amount}</div>
            <button type='button' onClick={onClickHandler} id='changetitlebutton'>Change title</button>
        </Container>

        // Forms in React


    );
}
export default Subscription; 