import { Card, Form, Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faThList, faFileZipper } from '@fortawesome/free-solid-svg-icons';

import {  faFilePdf } from '@fortawesome/free-solid-svg-icons';

import {  faBookOpen } from '@fortawesome/free-solid-svg-icons';

import {  faBahai } from '@fortawesome/free-solid-svg-icons';

function BookListItem(props) {


return (
    <>
    <Card >
      <Card.Body>
      <div className="d-flex py-3">
          <img className="book-poster" variant="fluid" src={'https://assets.chitanka.info/thumb/book-cover/11/4370.250.jpg'} alt={"101 далматинци"}/>
          <div className="px-3 flex-grow-1  ">
              <div className="book-vote badge bg-primary  "> {6}
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
              <div className="book-overview pt-3">
                  {"Филмът разказва историята на петнадесет малки далматинчета, които са отвлечени от злодейката Круела де Вил, която иска да използва кожите им, за да си направи палта. Родителите им, Понго и Пердита, замислят план, чрез който да спасят децата си от Круела, като изведнъж спасяват още 84 кученца, закупени от зоомагазини, с което общият брой на далматинците става 101."}
              </div>
          </div>
      </div>
            <br />
                <ButtonGroup  size="mb-2" ClassName="d-flex align-items-start justify-content-between">
                   <Button variant="outline-primary"> zip
                   <FontAwesomeIcon icon={faFileZipper} />
                   </Button> 
                   <Button  variant="outline-primary"  > pdf
                   <FontAwesomeIcon icon={ faFilePdf} />
                   </Button>
                   <Button  variant="outline-primary" >Чети онлайн
                   <FontAwesomeIcon icon={faBookOpen}/>
                   </Button>
                </ButtonGroup>
             <br />
                <hr className="my-9"></hr>
    
      <div className="d-flex py-3">
          <img className="book-poster" variant="fluid" src={'https://assets.chitanka.info/thumb/book-cover/12/4612.250.jpg'} alt={"Алиса в огледалния свят"}/>
          <div className="px-3 flex-grow-1  ">
              <div className="movie-vote badge bg-primary  ">
                            {5}
                        </div> 
              <div className="d-flex align-items-start justify-content-between" >
                      <div className="d-flex justify-content-between align-items-center mb-8">
                      <h4 className="book-title"> Алиса в огледалния свят</h4>  
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
                <ButtonGroup  size="mb-2" ClassName="d-flex align-items-start justify-content-between">
                   <Button variant="outline-primary"> zip
                   <FontAwesomeIcon icon={faFileZipper} />
                   </Button> 
                   <Button  variant="outline-primary"  > pdf
                   <FontAwesomeIcon icon={ faFilePdf} />
                   </Button>
                   <Button  variant="outline-primary" >Чети онлайн
                   <FontAwesomeIcon icon={faBookOpen}/>
                   </Button>
                </ButtonGroup>
             <br />
                <hr className="my-9"></hr>

                <div className="d-flex py-3">
          <img className="book-poster" variant="fluid" src={'https://assets.chitanka.info/thumb/book-cover/12/4850.250.jpg'} alt={"	Белорозка и Червенорозка"}/>
          <div className="px-3 flex-grow-1  ">
              <div className="movie-vote badge bg-primary  ">
                            {5}
                        </div> 
              <div className="d-flex align-items-start justify-content-between" >
                      <div className="d-flex justify-content-between align-items-center mb-8">
                      <h4 className="book-title"> Белорозка и Червенорозка</h4>  
            </div>
            </div>
                      <div className="fw-bold books-author">
                      <h5 className="books-author">Братя Грим </h5>
                      </div>
                      <div className="fw-bold book-genre"> 
                      <h6 className="book-genre"> Приказка  </h6>
                      </div>
              <div className="book-overview pt-3">
                  {"„Майката на двете сестри живяла дълги години щастлива край децата си. Тя взела със себе си двата розови храста и ги посадила пред прозореца си. Всяка година на тях цъфтели прекрасни бели и червени рози.“"}
              </div>
          </div>
      </div>
            <br />
                <ButtonGroup  size="mb-2" ClassName="d-flex align-items-start justify-content-between">
                   <Button variant="outline-primary"> zip
                   <FontAwesomeIcon icon={faFileZipper} />
                   </Button> 
                   <Button  variant="outline-primary"  > pdf
                   <FontAwesomeIcon icon={ faFilePdf} />
                   </Button>
                   <Button  variant="outline-primary" >Чети онлайн
                   <FontAwesomeIcon icon={faBookOpen}/>
                   </Button>
                </ButtonGroup>
             <br />
                <hr className="my-9"></hr>

                <div className="d-flex py-3">
          <img className="book-poster" variant="fluid" src={'https://assets.chitanka.info/thumb/book-cover/13/5010.250.jpg'} alt={"Домашен слон"}/>
          <div className="px-3 flex-grow-1  ">
              <div className="movie-vote badge bg-primary  ">
                            {5}
                        </div> 
              <div className="d-flex align-items-start justify-content-between" >
                      <div className="d-flex justify-content-between align-items-center mb-8">
                      <h4 className="book-title">Домашен слон</h4>  
            </div>
            </div>
                      <div className="fw-bold books-author">
                      <h5 className="books-author">Стоян Даскалов </h5>
                      </div>
                      <div className="fw-bold book-genre"> 
                      <h6 className="book-genre"> Разкази за деца</h6>
                      </div>
              <div className="book-overview pt-3">
                  {"„Майката на двете сестри живяла дълги години щастлива край децата си. Тя взела със себе си двата розови храста и ги посадила пред прозореца си. Всяка година на тях цъфтели прекрасни бели и червени рози.“"}
              </div>
          </div>
      </div>
            <br />
                <ButtonGroup  size="mb-2" ClassName="d-flex align-items-start justify-content-between">
                   <Button variant="outline-primary"> zip
                   <FontAwesomeIcon icon={faFileZipper} />
                   </Button> 
                   <Button  variant="outline-primary"  > pdf
                   <FontAwesomeIcon icon={ faFilePdf} />
                   </Button>
                   <Button  variant="outline-primary" >Чети онлайн
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