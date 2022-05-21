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

function BookReviews (props) {
    

    return (
        <>
         <div className="mt-2 mt-md-3">
                
                <Card >
                   
                    <Card.Body>
                    
                        <Card.Title>Ревюта на  книги</Card.Title>
                       
                           <hr/>
                        <div className="row">
                      
            <div className="col-md-4">
            <div className="grid-movie-container img-thumbnail mb-9">
           
           
                       <div className="fw-bold book-titl mb-9">
                        <h10 className="book-title"> Ревю  от Георги: </h10> 
                        <ButtonGroup  size="ms-2" className= " d-flex align-items-start  justify-content-between" >
                       <Button  variant="outline-primary"> 
                       <EditIcon color="primary" /> 
                        </Button> 
                        <Button  variant="outline-danger"  > 
                        <FontAwesomeIcon icon={ faTrashCan} />
                   </Button>
                   </ButtonGroup>
                        </div>

                        <div className="fw-bold book-titl mb-9">
                        <h10 className="book-title"> "101 далматинци"</h10> </div>
                        <div className="books-author">
                        <h11 className="books-author"> Доуди Смит </h11> </div>
                        <div className="books-author">
                        <h11 className="books-rate"> Рейтинг </h11> </div>
                        <div className="book-vote badge bg-success  "> {6} </div>

                        <div className="book-overview pt-3">
                     {"Невероятен роман,които допада изключително както на по-малки така и на по-големи деца"}
                     </div>
                </div>
                </div>    
              
                <div className="col-md-4">
            <div className="grid-movie-container img-thumbnail mb-9">
           
           
                       <div className="fw-bold book-titl mb-9">
                        <h10 className="book-title"> Ревю  от Георги: </h10> 
                        <ButtonGroup  size="ms-2" className= " d-flex align-items-start  justify-content-between" >
                       <Button  variant="outline-primary"> 
                       <EditIcon color="primary" /> 
                        </Button> 
                        <Button  variant="outline-danger"  > 
                        <FontAwesomeIcon icon={ faTrashCan} />
                   </Button>
                   </ButtonGroup>
                        </div>

                        <div className="fw-bold book-titl mb-9">
                        <h10 className="book-title"> "101 далматинци"</h10> </div>
                        <div className="books-author">
                        <h11 className="books-author"> Доуди Смит </h11> </div>
                        <div className="books-author">
                        <h11 className="books-rate"> Рейтинг </h11> </div>
                        <div className="book-vote badge bg-success  "> {6} </div>

                        <div className="book-overview pt-3">
                     {"Невероятен роман,които допада изключително както на по-малки така и на по-големи деца"}
                     </div>
                </div>
                </div>    
                </div>
                </Card.Body>
        
        </Card>
    </div>
   
  
               
        </>
    )
}
 
export default BookReviews; 