import Container from '../templates/Container'
import './Subscriberlist.css'

const Subscriberlist = (props) => {
    return (
        <Container className="subscribers"> 
            <ul>{props.list.map((item) => {
              return  <li key={item.id}>{item.name} - {item.pincode} </li>
            })}</ul>
        </Container>
    )
}

export default Subscriberlist
