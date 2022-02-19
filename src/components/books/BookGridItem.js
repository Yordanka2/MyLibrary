import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Form, Button, ButtonGroup, Modal } from "react-bootstrap";
import { faThList, faFileZipper } from '@fortawesome/free-solid-svg-icons';

import {  faFilePdf } from '@fortawesome/free-solid-svg-icons';

import {  faBookOpen } from '@fortawesome/free-solid-svg-icons';

import {  faBahai } from '@fortawesome/free-solid-svg-icons';
import ReadMore from "../books/Modal";

function BookGridItem (props) {
    

   
 
    return (
        <>
      <div className="col-md-4">
      <div className="grid-movie-container img-thumbnail mb-9">
                <div className="d-flex">
                <img className="book-poster w-50" 
                src={'https://assets.chitanka.info/thumb/book-cover/11/4370.250.jpg'} alt={"101 далматинци"}/>
                   
            <div className="px-2">
                       <div className="fw-bold book-titl mb-9">
                        <h10 className="book-title"> 101 далматинци</h10> </div>
                        <div className="books-author">
                        <h11 className="books-author"> Доуди Смит </h11> </div>
                 
            <div className=" book-genre py-2"> 
                        <h12 className="book-genre"> Роман  </h12>  
                       <div className="book-vote badge bg-primary  "> {6} </div>
                        
            </div>
         </div>


        </div>
            <div className="book-overview pt-3">
                  {"Филмът разказва историята на петнадесет малки далматинчета, които са отвлечени от злодейката Круела де Вил, която иска да използва кожите им, за да си направи палта... "}        
                 </div>
             <ButtonGroup  size="sm-1" className="buttons  py-2" >
                   <Button variant="outline-primary" size="sm"> zip
                   <FontAwesomeIcon icon={faFileZipper} />
                   </Button> 
                   <Button   variant="outline-primary" size="sm"   > pdf
                   <FontAwesomeIcon icon={ faFilePdf} />
                   </Button>
                   <Button  variant="outline-primary" size="sm" >Чети онлайн
                   <FontAwesomeIcon icon={faBookOpen}/>
                   </Button>
                </ButtonGroup>
             <br />
            
            </div>
          </div>
          <br />
          
          <div className="col-md-4">
        <div className="grid-movie-container img-thumbnail mb-9">
                <div className="d-flex">
                <img className="book-poster w-50" 
                src={'https://assets.chitanka.info/thumb/book-cover/12/4612.250.jpg'} alt={"Алиса в огледалния свят"}/>
                   
            <div className="px-2">
                       <div className="fw-bold book-titl mb-9">
                        <h10 className="book-title"> Алиса в огледалния свят</h10> </div>
                        <div className="books-author">
                        <h11 className="books-author"> Луис Карол  </h11> </div>
                 
            <div className=" book-genre py-2"> 
                        <h12 className="book-genre"> Роман  </h12>  
                       <div className="book-vote badge bg-primary  "> {6} </div>
                        
            </div>
         </div>
        </div>
        <div className="book-overview pt-3">
                  {"„Алиса в Огледалния свят“ (оригинално заглавие на английски: Through the Looking-Glass, and What Alice Found There – През огледалото, и какво откри Алиса там)..."}
              </div>
        
                    <ButtonGroup  size="sm-1" className="buttons  py-2" >
                   <Button variant="outline-primary" size="sm"> zip
                   <FontAwesomeIcon icon={faFileZipper} />
                   </Button> 
                   <Button   variant="outline-primary" size="sm"   > pdf
                   <FontAwesomeIcon icon={ faFilePdf} />
                   </Button>
                   <Button  variant="outline-primary" size="sm" >Чети онлайн
                   <FontAwesomeIcon icon={faBookOpen}/>
                   </Button>
                </ButtonGroup>
             <br />
            
            </div>
          </div>
          <br />
          
          <div className="col-md-4">
        <div className="grid-movie-container img-thumbnail mb-9">
                <div className="d-flex">
                <img className="book-poster w-50" 
                src={'https://assets.chitanka.info/thumb/book-cover/12/4850.250.jpg'} alt={"Белорозка и Червенорозка"}/>
                   
            <div className="px-2">
                       <div className="fw-bold book-titl mb-9">
                        <h10 className="book-title"> Белорозка и Червенорозка</h10> </div>
                        <div className="books-author">
                        <h11 className="books-author"> Братя Грим  </h11> </div>
                 
            <div className=" book-genre py-2"> 
                        <h12 className="book-genre"> Приказка   </h12>  
                       <div className="book-vote badge bg-primary  "> {6} </div>
                        
            </div>
         </div>
        </div>
        <div className="book-overview pt-3">
                  {"„Майката на двете сестри живяла дълги години щастлива край децата си. Тя взела със себе си двата розови храста и ги посадила пред прозореца..."}
              </div>
        
                    <ButtonGroup  size="sm-1" className="buttons  py-2" >
                   <Button variant="outline-primary" size="sm"> zip
                   <FontAwesomeIcon icon={faFileZipper} />
                   </Button> 
                   <Button   variant="outline-primary" size="sm"   > pdf
                   <FontAwesomeIcon icon={ faFilePdf} />
                   </Button>
                   <Button  variant="outline-primary" size="sm" >Чети онлайн
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
 
export default BookGridItem; 