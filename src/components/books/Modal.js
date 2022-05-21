
import {  Modal,MyVerticallyCenteredModal} from "react-bootstrap";
import {useState} from "react";
import {setShow } from "../../redux/actions";
import {  Button, ButtonGroup } from "react-bootstrap";
import FormReviews from "../reviews/FormReviews";
import {  faRLList, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LaunchModal(props) {
 
    const [show, setShow] = useState(false);
  
    return (
      <>
      <div  className= "  d-flex ">
     
        <Button variant="outline-success"   onClick={() => setShow(true)}>
        <FontAwesomeIcon icon={ faComment  }/>
          
        
        </Button>
      
      </div>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogclassName="modal-90w"
          
        >
          <Modal.Header closeButton>
            
           
          </Modal.Header>
          <Modal.Body>
          <FormReviews/>
          </Modal.Body>
        </Modal>
      </>
    );
  }

  export default LaunchModal;