import './Studentlist.css';

function Studentlist(props) {
    return (
< >
<h3 className="names">Student Name: {props.name}</h3>
</>
    );
}

export default Studentlist