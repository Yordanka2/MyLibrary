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
                       <div className="book-vote badge bg-primary  "> {7} </div>
                        
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
                src={'https://assets.chitanka.info/thumb/book-cover/10/4114.250.jpg'} alt={"Лакомото мече "}/>
                   
            <div className="px-2">
                       <div className="fw-bold book-titl mb-9">
                        <h10 className="book-title"> Лакомото мече </h10> </div>
                        <div className="books-author">
                        <h11 className="books-author"> Емилиян Станев  </h11> </div>
                 
            <div className=" book-genre py-2"> 
                        <h12 className="book-genre"> Приказка   </h12>  
                       <div className="book-vote badge bg-primary  "> {9} </div>
                        
            </div>
         </div>
        </div>
        <div className="book-overview pt-3">
                  {"Опитвам да представя на децата природата и животните, без да изменям основната същност на явленията и характерните особености на животните..."}
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
                src={'https://assets.chitanka.info/thumb/book-cover/13/5010.250.jpg'} alt={"Домашен слон"}/>
                   
            <div className="px-2">
                       <div className="fw-bold book-titl mb-9">
                        <h10 className="book-title">Домашен слон</h10> </div>
                        <div className="books-author">
                        <h11 className="books-author"> Стоян Даскалов   </h11> </div>
                 
            <div className=" book-genre py-2"> 
                        <h12 className="book-genre">  Разкази за деца  </h12>  
                       <div className="book-vote badge bg-primary  "> {4} </div>
                        
            </div>
         </div>
        </div>
        <div className="book-overview pt-3">
                  {"„ И винаги, когато дойде някой на гости, тя показва снимката и започва да разказва как ще храним с нашата трева цял живот слона, като че той не е в зоологическата градина..."}
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
                src={'https://assets.chitanka.info/thumb/book-cover/00/147.250.jpg'} alt={"Ние, врабчетата"}/>
                   
            <div className="px-2">
                       <div className="fw-bold book-titl mb-9">
                        <h10 className="book-title">Ние, врабчетата</h10> </div>
                        <div className="books-author">
                        <h11 className="books-author">Йордан Радичков</h11> </div>
                 
            <div className=" book-genre py-2"> 
                        <h12 className="book-genre">Разкази за деца</h12>  
                       <div className="book-vote badge bg-primary"> {8} </div>
                        
            </div>
         </div>
        </div>
        <div className="book-overview pt-3">
                  {"„А особено пък ако човек е гладен, съвсем ще забрави всичко. Затуй, преди да продължа нататък, ще седна да закуся с ей това насекомо..Някой каза ли ми: Добър апетит!..."}
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
                src={'https://assets.chitanka.info/thumb/book-cover/00/42.250.jpg'} alt={"Небето е на всички"}/>
                   
            <div className="px-2">
                       <div className="fw-bold book-titl mb-9">
                        <h10 className="book-title">Небето е на всички</h10> </div>
                        <div className="books-author">
                        <h11 className="books-author">Джани Родари</h11> </div>
                 
            <div className=" book-genre py-2"> 
                        <h12 className="book-genre">Детски стихове и гатанки </h12>  
                       <div className="book-vote badge bg-primary"> {6} </div>
                        
            </div>
         </div>
        </div>
        <div className="book-overview pt-3">
                  {"Тази книжка съдържа повечето от най-хубавите стихотворения на вашия стар познат, италианския писател Джани Родари.В книжката са включени..."}
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