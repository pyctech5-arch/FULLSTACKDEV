import './Errormodel.css';
import Container from './Container';
import Button from './Button';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className='backdrop' onClick={props.onClose}></div>;
};

const Overlay = (props) => {
  return (
    <Container className="modal">
      <header className='header'>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p className='content'>{props.content}</p>
      </div>
      <footer className='actions'>
        <Button onClick={props.onClose}>Okay</Button>
      </footer>
    </Container>
  );
};

const Errormodel = (props) => {
  return (
    //Below Shown in the example of react portalse 
        // Ex:1
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById('backdrop-root')
      )}

      {ReactDOM.createPortal(
        <Overlay
          onClose={props.onClose}
          title={props.title}
          content={props.content}
        />,
        document.getElementById('overlay-root')
      )}
    </Fragment>
     // <div className='backdrop'onClick={props.onClose}>
        // <Container className="modal">
        //     <header className='header'>
        //         <h2> {props.title}</h2>
        //     </header>
        //     <div>
        //         <p className='content'>{props.content}</p>
        //     </div>
        //     <footer className='actions'><Button onClick={props.onClose} >okay</Button></footer>
        // </Container>
        // </div> 
  );
};

export default Errormodel;

