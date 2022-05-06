
import { Card, Form, Image,Button, ButtonGroup, Modal,ButtonToolbar,Tabs,Tab,Sonnet,ListGroup} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faThList, faFileZipper } from '@fortawesome/free-solid-svg-icons';

import {  faList } from '@fortawesome/free-solid-svg-icons';

import {  faBookOpen } from '@fortawesome/free-solid-svg-icons';

import {  faBahai } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import LaunchModal from "../books/Modal"
import ReviewLayout  from "../../layouts/ReviewLayout";
import UserInformation from "../bookDetails/UserInformation";
import BookReview from "../bookDetails/BookReview";

function LoginForm() {
    return (
        <Card>
            
               <div>
                   <img className="book-poster w-100  rounded float-left" src="https://image.shutterstock.com/image-vector/books-horizontal-line-260nw-263260166.jpg">
               </img>

              </div>
               
              
               
                
            
                
                <Card.Body>
             
             <li class="row">
                 <label for="formGroupExampleInput" className="form-label flex-space-around ">
                        <div ClassName = " d-flex justify-content flex-start"  class="form-control">  
                         <div type="text">
                                <p className ="text-success">  Възстановяване на парола</p>           
                         </div>
                         </div>
                     </label>
              </li>
              
                      

              <li class="row">
                 <label for="formGroupExampleInput" className="form-label flex-space-around ">
                        <div ClassName = " d-flex justify-content flex-start"  class="form-control">  
                         <div type="text">
                                <p className ="text-success">  Деактивиране на акаунт</p>           
                         </div>
                         </div>
                     </label>
              </li>
              <li class="row">
                 <label for="formGroupExampleInput" className="form-label flex-space-around ">
                        <div ClassName = " d-flex justify-content flex-start"  class="form-control">  
                         <div type="text">
                                <p className ="text-success">  Често задавани въпроси</p>           
                         </div>
                         </div>
                     </label>
              </li>
              <li class="row">
                 <label for="formGroupExampleInput" className="form-label flex-space-around ">
                        <div ClassName = " d-flex justify-content flex-start"  class="form-control">  
                         <div type="text">
                                <p className ="text-success">  Как да открия дадена книга</p>           
                         </div>
                         </div>
                     </label>
              </li>
              
              <li class="row">
                 <label for="formGroupExampleInput" className="form-label flex-space-around ">
                        <div ClassName = " d-flex justify-content flex-start"  class="form-control">  
                         <div type="text">
                                <p className ="text-success"> Как да кача книга</p>           
                         </div>
                         </div>
                     </label>
              </li>
              <li class="row">
                 <label for="formGroupExampleInput" className="form-label flex-space-around ">
                        <div ClassName = " d-flex justify-content flex-start"  class="form-control">  
                         <div type="text">
                                <p className ="text-success"> Често срещани грешки</p>           
                         </div>
                         </div>
                     </label>
              </li>


<Card>
              <div class="form-group">
              <label for="exampleFormControlSelect1 "><p className ="font-weight-bold ms-4"> Свържи се с нас: </p></label>

                       <div type="text">
                               <p className ="text-black"> </p>
                                <p className ="text-black ms-4"> Имейл:knizhko@abv.bg</p>
                                <p className ="text-black ms-4"> Фейсбук страница:LibraryForKids</p> 
                                <p className ="text-black ms-4"> Инстаграм страница:LibraryForKids</p>       
                         </div> 
    
  </div>
</Card>
            
       </Card.Body> 
     </Card>
            
        
    )
}


export default LoginForm;



