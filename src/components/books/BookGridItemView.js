import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Form, Button, ButtonGroup, Modal } from "react-bootstrap";
import { faThList, faFileZipper } from '@fortawesome/free-solid-svg-icons';

import {  faFilePdf } from '@fortawesome/free-solid-svg-icons';

import {  faBookOpen } from '@fortawesome/free-solid-svg-icons';

import {  faBahai } from '@fortawesome/free-solid-svg-icons';

import {Link} from "react-router-dom";
import LaunchModal from "../books/Modal"

function BookGridItemView ({book}) {
    

   
 
    return (
        <>
      <div className="col-md-4">
      <div className="grid-movie-container img-thumbnail mb-9">
      <div className="d-flex">
                <img className="book-poster w-50" 
                src={book.image} alt={book.title}/>
             
            <div className="px-2">
                       <div className="fw-bold book-titl mb-9">
                       <Link to={`/books/${book._id}`}>
                      <h6 className="book-title">{book.title} </h6>  
                      </Link>
                       
                        <div className="books-author">
                        <h11 className="books-author">{book.author} </h11> </div>
                 </div>
            <div className=" book-genre py-2"> 
                        <h12 className="book-genre"> {book.genre}  </h12>  
                         <div className="book-vote badge bg-primary  "> {book.rating} </div>
                         <div  className="  d-flex py-3 ms-1" > <LaunchModal/> </div>
                                                                             
                      
                       
                     </div>
         </div>
         
        </div>
            <div className="book-overview pt-3">
                  {book.description}        
                 </div>
             <ButtonGroup  size="sm-1" className="buttons  py-2" >
                   <Button variant="outline-success" size="sm"> zip
                   <FontAwesomeIcon icon={faFileZipper} />
                   </Button> 
                   <Button   variant="outline-success" size="sm"   > pdf
                   <FontAwesomeIcon icon={ faFilePdf} />
                   </Button>
                   <Button  variant="outline-success" size="sm" >Чети онлайн
                   <FontAwesomeIcon icon={faBookOpen}/>
                   </Button>
                </ButtonGroup>
             <br />
            
            </div>
          </div>
          <br />
          
        </>
    )
}
 
export default BookGridItemView; 
