import { Card, Form, Button, ButtonGroup, Modal,ButtonToolbar,Tabs,Tab,Sonnet,ListGroup} from "react-bootstrap";
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

function Box(props) {


return (
    <>
    <Card >
      <Card.Body>
      

                     
                       
           

             <div className="form-label  justify-content-space-between">
             <li class="row">
                      
                    <label for="formGroupExampleInput" className="form-label flex-space-around ">
                        
                         <div ClassName = " d-flex justify-content flex-start"  class="form-control">  
                        
                         <dl class="icon" >
                          
                             <div type="text">
                             <Link to={`/forum/${1}`}>
                           <h5 className="book-recomended">  Препоръки</h5>  
                           </Link>
                              
                              <FontAwesomeIcon icon={ faList} /> В тази подсекция ще намерите препоръчани книги,книги с най-висок рейтинг, новоизддени книги,интерсни нови произведения.                 </div>
                             
                           
                         </dl>

                        </div>
                    </label>
            </li>
                     
                     <label for="formGroupExampleInput" class="form-label">
                     <div type="text" class="form-control"  > 
                     
                     <Link to={`/forum/${2}`}>
                     <h5> Лично творчество </h5>

                     </Link>
                     <div type="text" ><FontAwesomeIcon icon={ faList} />  В тази подсекция ще намерите различни авторски разкази,гатанки,приказки и т.н. </div>
                     </div>
                     </label>

                     <label for="formGroupExampleInput" class="form-label">
                     <div type="text" class="form-control"  > 
                     
                     <Link to={`/forum/${3}`}>
                         <h5> Общи приказки </h5>
                         </Link>
                     <div type="text" ><FontAwesomeIcon icon={ faList} />  В тази подсекция ще намерите разни теми, разни идеали,коментари,съвети и т.н. </div>
                     </div>
                     </label>
     


                     <label for="formGroupExampleInput" class="form-label">
                     <div type="text" class="form-control"  >
                     <Link to={`/forum/${4}`}>
                         <h5> Забавни истории </h5>
                         </Link>
                     <div type="text" > <FontAwesomeIcon icon={ faList} />  В тази подсекция ще намерите различни интересни истории както от автори на книги така и от читатели.  </div>
                     </div>
                     </label>
     
                     <label for="formGroupExampleInput" class="form-label">
                     <div type="text" class="form-control"  > 
                     <Link to={`/forum/${5}`}>
                     <h5> Начинания </h5>
                     </Link>
                     <div type="text" ><FontAwesomeIcon icon={ faList} />     В тази подсекция ще намерите нови появили се  идеи за странични проекти. Обсъждайте ги тук. </div>
                     </div>
                     </label>
                    
                      
             </div>
    



         <div className=" d-flex align-items-start  justify-content-between">
            
         </div>
         <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
             

             <Tab eventKey="addreview" title="Създай тема">

             <Card>
            <Card.Body>
                <Form>
               
                <Form.Group className="mb-3" controlId="formBasicGrade">
                        <Form.Label size="sm">Избери подсекция  </Form.Label>
   
   <div class="dropdown">
         <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
             Избери подсекция
         </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
               <li><a class="dropdown-item" href="#">Препоръки</a></li>
               <li><a class="dropdown-item" href="#"> Лично творчество</a></li>
               <li><a class="dropdown-item" href="#">Общи приказки</a></li>
               <li><a class="dropdown-item" href="#">Забавни истории</a></li>
               <li><a class="dropdown-item" href="#">Начинания</a></li>
          </ul>
    </div>


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
export default Box;