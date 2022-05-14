import { Card, Form, Button, ButtonGroup, Modal,ButtonToolbar} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faThList, faFileZipper } from '@fortawesome/free-solid-svg-icons';

import {  faFilePdf } from '@fortawesome/free-solid-svg-icons';

import {  faBookOpen } from '@fortawesome/free-solid-svg-icons';

import {  faBahai } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import LaunchModal from "../books/Modal"

function BookListItem(props) {

return (
    <>
    <Card >
      <Card.Body>
      <div className="d-flex py-3">
          <img className="book-poster" variant="fluid" src={'https://assets.chitanka.info/thumb/book-cover/11/4370.250.jpg'} alt={"101 далматинци"}/>
          <div className="px-3 flex-grow-1 " >
              <div className= "d-flex align-items-start justify-content-between ">
              <div className="book-vote badge bg-primary">
                  {6}
               </div>
               <div>
               <LaunchModal/>
              </div>
        </div>
              <div className="d-flex align-items-start justify-content-between" >
                      <div className="d-flex justify-content-between align-items-center mb-8">
                     <Link to={`/books/${1}`}>
                      <h4 className="book-title text-special"> 101 далматинци</h4>  
                      </Link>
            </div>
            </div>
                      <div className="fw-bold books-author">
                      <h5 className="books-author"> Доуди Смит </h5>
                      </div>
                      <div className="fw-bold book-genre"> 
                      <h6 className="book-genre"> Роман  </h6>
                      </div>
              <div className="book-overview pt-3">
                  {"Филмът разказва историята на петнадесет малки далматинчета, които са отвлечени от злодейката Круела де Вил, която иска да използва кожите им, за да си направи палта. Родителите им, Понго и Пердита, замислят план, чрез който да спасят децата си от Круела, като изведнъж спасяват още 84 кученца, закупени от зоомагазини, с което общият брой на далматинците става 101."}
              </div>
          </div>
      </div>
           

         <div className=" d-flex align-items-start  justify-content-between">
            <ButtonGroup  size="mb-2" className=" d-flex">
           
             <div className="btn-group btn-group-ms-2">
                   <Button variant="outline-success"> zip
                   <FontAwesomeIcon icon={faFileZipper} />
                   </Button> 
                   <Button  variant="outline-success"  > pdf
                   <FontAwesomeIcon icon={ faFilePdf} />
                   </Button>
                   <Button  variant="outline-success" >Чети онлайн
                   <FontAwesomeIcon icon={faBookOpen}/>
                   </Button>
             </div>    
                </ButtonGroup>
         </div>
             <br />
                <hr className="my-9"></hr>
    
      <div className="d-flex py-3">
          <img className="book-poster" variant="fluid" src={'https://assets.chitanka.info/thumb/book-cover/12/4612.250.jpg'} alt={"Алиса в огледалния свят"}/>
          <div className="px-3 flex-grow-1  ">
          <div className="d-flex align-items-start justify-content-between" >
              <div className="movie-vote badge bg-primary  ">
                            {7}
                        </div> 
                 <div>
                 <LaunchModal/>
                </div>
              </div>
              <div className="d-flex align-items-start justify-content-between" >
                      <div className="d-flex justify-content-between align-items-center mb-8">

                      <Link to={`/books/${2}`}>
                      <h4 className="book-title"> Алиса в огледалния свят</h4>  
                      </Link>

                      
            </div>
            </div>
                      <div className="fw-bold books-author">
                      <h5 className="books-author">Луис Карол </h5>
                      </div>
                      <div className="fw-bold book-genre"> 
                      <h6 className="book-genre"> Роман  </h6>
                      </div>
              <div className="book-overview pt-3">
                  {"„Алиса в Огледалния свят“ (оригинално заглавие на английски: Through the Looking-Glass, and What Alice Found There – През огледалото, и какво откри Алиса там) е книга за деца от английския писател Луис Карол. Написана е през 1871 година и е продължение на „Алиса в Страната на чудесата“."}
              </div>
          </div>
      </div>
            <br />
                <ButtonGroup  size="mb-2" className="d-flex align-items-start justify-content-between">
                   <Button variant="outline-success"> zip
                   <FontAwesomeIcon icon={faFileZipper} />
                   </Button> 
                   <Button  variant="outline-success"  > pdf
                   <FontAwesomeIcon icon={ faFilePdf} />
                   </Button>
                   <Button  variant="outline-success" >Чети онлайн
                   <FontAwesomeIcon icon={faBookOpen}/>
                   </Button>
                </ButtonGroup>
             <br />
                <hr className="my-9"></hr>

                <div className="d-flex py-3">
          <img className="book-poster" variant="fluid" src={'https://assets.chitanka.info/thumb/book-cover/10/4114.250.jpg'} alt={"Лакомото мече "}/>
          <div className="px-3 flex-grow-1  ">
          <div className="d-flex align-items-start justify-content-between" >
              <div className="movie-vote badge bg-primary  ">
                            {9}
                        </div> 
                        <div>
                 <LaunchModal/>
                </div>
                </div>
              <div className="d-flex align-items-start justify-content-between" >
                      <div className="d-flex justify-content-between align-items-center mb-8">


                      <Link to={`/books/${3}`}>
                      <h4 className="book-title">Лакомото мече </h4>  
                      </Link>
                   
            </div>
            </div>
                      <div className="fw-bold books-author">
                      <h5 className="books-author">Емилиян Станев</h5>
                      </div>
                      <div className="fw-bold book-genre"> 
                      <h6 className="book-genre"> Приказка  </h6>
                      </div>
              <div className="book-overview pt-3">
                  {"„Моята главна цел — пише Емилиян Станев, — е да възхитя малкия читател и да обогатя неговите асоциации. По този начин се опитвам да представя на децата природата и животните, без да изменям основната същност на явленията и характерните особености на животните. Аз не им казвам кое от тия животни е добро и кое зло — децата сами ще решат това по-добре от мен.““"}
              </div>
          </div>
      </div>
            <br />
                <ButtonGroup  size="mb-2" className="d-flex align-items-start justify-content-between">
                   <Button variant="outline-success"> zip
                   <FontAwesomeIcon icon={faFileZipper} />
                   </Button> 
                   <Button  variant="outline-success"  > pdf
                   <FontAwesomeIcon icon={ faFilePdf} />
                   </Button>
                   <Button  variant="outline-success" >Чети онлайн
                   <FontAwesomeIcon icon={faBookOpen}/>
                   </Button>
                </ButtonGroup>
             <br />
                <hr className="my-9"></hr>

                <div className="d-flex py-3">
          <img className="book-poster" variant="fluid" src={'https://assets.chitanka.info/thumb/book-cover/13/5010.250.jpg'} alt={"Домашен слон"}/>
          <div className="px-3 flex-grow-1  ">
          <div className="d-flex align-items-start justify-content-between" >
              <div className="movie-vote badge bg-primary  ">
                            {4}
                        </div> 
                        <div>
                 <LaunchModal/>
                </div>
                </div>
              <div className="d-flex align-items-start justify-content-between" >
                      <div className="d-flex justify-content-between align-items-center mb-8">
                      <Link to={`/books/${4}`}>
                      <h4 className="book-title">Домашен слон</h4> 
                      </Link>
                        
            </div>
            </div>
                      <div className="fw-bold books-author">
                      <h5 className="books-author">Стоян Даскалов </h5>
                      </div>
                      <div className="fw-bold book-genre"> 
                      <h6 className="book-genre"> Разкази за деца</h6>
                      </div>
              <div className="book-overview pt-3">
                  {"„ И винаги, когато дойде някой на гости, тя показва снимката и започва да разказва как ще храним с нашата трева цял живот слона, като че той не е в зоологическата градина, а живее при нас, в нашия двор, под дълголетния дъб като силно, но кротко домашно животно, което позволява само на тях тримата да го изкарват на паша, да го яздят и си правят разходки…“"}
              </div>
          </div>
      </div>
            <br />
                <ButtonGroup  size="mb-2" className="d-flex align-items-start justify-content-between">
                   <Button variant="outline-success"> zip
                   <FontAwesomeIcon icon={faFileZipper} />
                   </Button> 
                   <Button  variant="outline-success"  > pdf
                   <FontAwesomeIcon icon={ faFilePdf} />
                   </Button>
                   <Button  variant="outline-success" >Чети онлайн
                   <FontAwesomeIcon icon={faBookOpen}/>
                   </Button>
                </ButtonGroup>
             <br />
                <hr className="my-9"></hr>

                <div className="d-flex py-3">
          <img className="book-poster" variant="fluid" src={'https://assets.chitanka.info/thumb/book-cover/00/147.250.jpg'} alt={"Ние, врабчетата"}/>
          <div className="px-3 flex-grow-1  ">
          <div className="d-flex align-items-start justify-content-between" >
              <div className="movie-vote badge bg-primary  ">
                            {8}
                        </div> 
                        <div>
                 <LaunchModal/>
                </div>
                </div>
              <div className="d-flex align-items-start justify-content-between" >
                      <div className="d-flex justify-content-between align-items-center mb-8">
                      
                      <Link to={`/books/${5}`}>
                      <h4 className="book-title">	Ние, врабчетата</h4>  
                      </Link>
                       
            </div>
            </div>
                      <div className="fw-bold books-author">
                      <h5 className="books-author">Йордан Радичков</h5>
                      </div>
                      <div className="fw-bold book-genre"> 
                      <h6 className="book-genre"> Разкази за деца</h6>
                      </div>
              <div className="book-overview pt-3">
                  {"А особено пък ако човек е гладен, съвсем ще забрави всичко. Затуй, преди да продължа нататък, ще седна да закуся с ей това насекомо… Някой каза ли ми: Добър апетит! Благодаря, желая и на вас добър апетит!“"}
              </div>
          </div>
      </div>
            <br />
                <ButtonGroup  size="mb-2" className="d-flex align-items-start justify-content-between">
                   <Button variant="outline-success"> zip
                   <FontAwesomeIcon icon={faFileZipper} />
                   </Button> 
                   <Button  variant="outline-success"  > pdf
                   <FontAwesomeIcon icon={ faFilePdf} />
                   </Button>
                   <Button  variant="outline-success" >Чети онлайн
                   <FontAwesomeIcon icon={faBookOpen}/>
                   </Button>
                </ButtonGroup>
             <br />
                <hr className="my-9"></hr>

                <div className="d-flex py-3">
          <img className="book-poster" variant="fluid" src={'https://assets.chitanka.info/thumb/book-cover/00/42.250.jpg'} alt={"Небето е на всички"}/>
          <div className="px-3 flex-grow-1  ">
          <div className="d-flex align-items-start justify-content-between" >
              <div className="movie-vote badge bg-primary  ">
                            {5}
                        </div> 
                        <div>
                 <LaunchModal/>
                </div>
                </div>
              <div className="d-flex align-items-start justify-content-between" >
                      <div className="d-flex justify-content-between align-items-center mb-8">

                      <Link to={`/books/${6}`}>
                      <h4 className="book-title">Небето е на всички</h4>    
                      </Link>
                       
            </div>
            </div>
                      <div className="fw-bold books-author">
                      <h5 className="books-author">Джани Родари</h5>
                      </div>
                      <div className="fw-bold book-genre"> 
                      <h6 className="book-genre"> Детски стихове и гатанки </h6>
                      </div>
              <div className="book-overview pt-3">
                  {"Тази книжка съдържа повечето от най-хубавите стихотворения на вашия стар познат, италианския писател Джани Родари. Той отдавна не е сред живите, но мисля, че веселите му стихчета, приказки и романи още живеят и дълго ще бъдат четени и обичани от децата по света."}
              </div>
          </div>
      </div>
            <br />
                <ButtonGroup  size="mb-2" className="d-flex align-items-start justify-content-between">
                   <Button variant="outline-success"> zip
                   <FontAwesomeIcon icon={faFileZipper} />
                   </Button> 
                   <Button  variant="outline-success"  > pdf
                   <FontAwesomeIcon icon={ faFilePdf} />
                   </Button>
                   <Button  variant="outline-success" >Чети онлайн
                   <FontAwesomeIcon icon={faBookOpen}/>
                   </Button>
                </ButtonGroup>
             <br />
                <hr className="my-9"></hr>


       </Card.Body>
      </Card>
  </>
)
}
export default BookListItem;