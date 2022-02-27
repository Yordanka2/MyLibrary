


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Form, Button, ButtonGroup, Modal } from "react-bootstrap";
import { faThList, faFileZipper } from '@fortawesome/free-solid-svg-icons';
import { faRLList, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faLList, faFilePen } from '@fortawesome/free-solid-svg-icons';
import EditIcon from '@mui/icons-material/Edit';
import {  faFilePdf } from '@fortawesome/free-solid-svg-icons';

import {  faBookOpen } from '@fortawesome/free-solid-svg-icons';
import {
    Container,
    Row,
    Col,
  } from "react-bootstrap";
import {  faBahai } from '@fortawesome/free-solid-svg-icons';
import ReadMore from "../books/Modal";

function BookReview (props) {
   
    

        return (
            <> 
         
                  <div className="row col mt-9 py-2 ">
                          
                      <div className="book-overview pt-3">
                         {"Невероятен роман,които допада изключително както на по-малки така и на по-големи деца."}
                         </div>
                  
        
                            <ButtonGroup  size="ms-2" ClassName= " d-flex align-items-start  justify-content-between" >
                           <Button  variant="outline-primary"> 
                           <EditIcon color="primary" /> 
                            </Button> 
                            <Button  variant="outline-danger"  > 
                            <FontAwesomeIcon icon={ faTrashCan} />
                       </Button>
                       </ButtonGroup>

     
                           </div>
                           <div className="row col mt-9 py-2 ">
                          
                          <div className="book-overview pt-3">
                             {"Този роман е вечна класика,която е четена и ще продължи да бъде четена от всяко поколение."}
                             </div>
                      
            
                                <ButtonGroup  size="ms-2" ClassName= " d-flex align-items-start  justify-content-between" >
                               <Button  variant="outline-primary"> 
                               <EditIcon color="primary" /> 
                                </Button> 
                                <Button  variant="outline-danger"  > 
                                <FontAwesomeIcon icon={ faTrashCan} />
                           </Button>
                           </ButtonGroup>


                               </div>
                               <div className="row col mt-9 py-2 ">
                          
                          <div className="book-overview pt-3">
                             {"Романа разкачва много интересна и забавна история.Препоръчвам ви го да го прочетете."}
                             </div>
                      
            
                                <ButtonGroup  size="ms-2" ClassName= " d-flex align-items-start  justify-content-between" >
                               <Button  variant="outline-primary"> 
                               <EditIcon color="primary" /> 
                                </Button> 
                                <Button  variant="outline-danger"  > 
                                <FontAwesomeIcon icon={ faTrashCan} />
                           </Button>
                           </ButtonGroup>



                               </div>
                               <div className="row col mt-9 py-2 ">
                          
                          <div className="book-overview pt-3">
                             {"Има и създаден филм,но определено историята в книгата е пресъзданеда доста по-добре."}
                             </div>
                      
            
                                <ButtonGroup  size="ms-2" ClassName= " d-flex align-items-start  justify-content-between" >
                               <Button  variant="outline-primary"> 
                               <EditIcon color="primary" /> 
                                </Button> 
                                <Button  variant="outline-danger"  > 
                                <FontAwesomeIcon icon={ faTrashCan} />
                           </Button>
                           </ButtonGroup>
                               </div>
              
            </>
        )
    }
     
 
export default BookReview; 