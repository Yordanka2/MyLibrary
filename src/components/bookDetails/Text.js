import { Card, Form, Button, ButtonGroup, Modal,ButtonToolbar,Tabs,Tab,Sonnet,} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faThList, faFileZipper } from '@fortawesome/free-solid-svg-icons';

import {  faFilePdf } from '@fortawesome/free-solid-svg-icons';

import {  faBookOpen } from '@fortawesome/free-solid-svg-icons';

import {  faBahai } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import LaunchModal from "../books/Modal"
import ReviewLayout  from "../../layouts/ReviewLayout";
import UserInformation from "./UserInformation";
import BookReview from "./BookReview";

function BookText(props) {


return (
    <>
    <Card >
      <Card.Body>
      <div className="d-flex py-3">
          <div className="px-3 flex-grow-1 " >
              <div className= "d-flex align-items-start justify-content-between ">
            
        </div>
              <div className="d-flex align-items-start justify-content-between" >
                      <div className="d-flex justify-content-between align-items-center mb-8">
                    
                      <h4 className="book-title"> 101 далматинци</h4>  
                      
            </div>
            </div>
                      <div className="fw-bold books-author">
                      <h5 className="books-author"> Доуди Смит </h5>
                      </div>
                      <div className="fw-bold book-genre"> 
                      <h6 className="book-genre"> Роман  </h6>
                      </div>
                      <div className="book-vote badge bg-success">
                         Рейтинг : {6}
                   </div>
              
          </div>
      </div>
           
         <div className=" d-flex align-items-start  justify-content-between">
            
         </div>
         <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
             <Tab eventKey="review" title="Ревюта">
              
               <Card>
             
                <ReviewLayout
                  left={<UserInformation/>}
                  right={<BookReview />} />

              </Card>
            
             </Tab>

             <Tab eventKey="addreview" title="Добави ревю">

             <Card>
            <Card.Body>
                <Form>
               
                <Form.Group className="mb-3" controlId="formBasicGrade">
                        <Form.Label size="sm">Оцени книгата </Form.Label>
                        <ButtonToolbar aria-label="Toolbar with button groups">
                     <ButtonGroup className="me-2" aria-label="First group" variant="outline-success">
                     <Button  variant="outline-success" >1 </Button> <Button variant="outline-success">2</Button> <Button variant="outline-success">3</Button> <Button variant="outline-success">4</Button>
                     <Button variant="outline-success">5</Button> <Button variant="outline-success" >6</Button> <Button variant="outline-success">7</Button> <Button variant="outline-success">8</Button>
                     <Button variant="outline-success">9</Button> <Button variant="outline-success">10</Button> 
                     </ButtonGroup>
                    </ButtonToolbar>
                    </Form.Group>
                       <Form.Group className="mb-3" controlId="formBasicInformation">
                        <Form.Label size="sm" >Допълнителна информация</Form.Label>
                        <Form.Control type="information" size="sm" placeholder="Въведи допълнителна информация" />
                        </Form.Group>
                        
                    
                    <Button variant="success" type="submit">
                        Публикувай
                    </Button>
                </Form>
            </Card.Body>
    
     </Card>
            
          </Tab>
           
          </Tabs>
                
    
      
       </Card.Body>
      </Card>
  </>
)
}
export default BookText;