import {useRef,useState,Fragment,useEffect } from 'react';
import Container from '../templates/Container';
import './Addsubscriber.css';
import Button from '../templates/Button';
import Errormodel from '../templates/Errormodel';
const Addsubscriber = (props) => {
    const nameInputRef=useRef('Max');
    const pincodeInputRef=useRef(' ');
    const [name, setname] = useState('');
    const [pincode, setpincode] = useState('');
    const [error, setError] = useState();
useEffect(()=>{
    console.log('');
    //api
},[pincode])

    const onnamechange = (event) => {
        setname(event.target.value);
       
    }
    const onpincodechange = (evo) => {
        //api 
        setpincode(evo.target.value);
    }
    const onsubmitHandler = (events) => {
        events.preventDefault();
        if (nameInputRef.current.value.trim().length == 0) {
            console.log("name not validated");
            setError({ title: 'invalid name', content: 'Name is the mendatory please enter your name' });
            return
        }
        if (pincode.trim().length == 0) {
            console.log("pincode not validated");
            setError({ title: 'invalid pincode', content: 'Pincode is the mendatory please enter your pincode' })
            return
        }
        if (pincode < 0 || pincode.trim().length < 5) {
            console.log("pincode value is not valid it should be 5 digit number");
            setError({ title: 'invalid pincode', content: 'pincode atleast have contain 5 digits. please enter pincode in positive num' })
            return
        }
        console.log("updated states", name, pincode);
    props.onAddSubscriber(nameInputRef.current.value, pincode);
        console.log("updated refs" ,nameInputRef);
        // setname('');
        nameInputRef.current.value=''
        setpincode('');
    }
    const oncloseHandler = () => {
        setError(null)
    }
    return (
        <Fragment>
            {error && <Errormodel title={error.title} content={error.content} onClose={oncloseHandler} />}
            <form onSubmit={onsubmitHandler}>
                <Container className="input">
                    {/* binded with input */}
                    <label htmlFor="name" >Name</label>
                    <input ref={nameInputRef} id="name"  type="text" onChange={onnamechange} ></input>
                    <label htmlFor="pincode">Pincode</label>
                    <input  id="pincode" value={pincode} type="number" onChange={onpincodechange}></input>
                    <Button type='submit'>Save</Button>
                </Container>
            </form>
        </Fragment>
    )
}

export default Addsubscriber;