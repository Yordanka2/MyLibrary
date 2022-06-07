import NavBar from "../components/NavBar";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Card, Form, Button, ButtonGroup, Modal,ButtonToolbar,Tabs,Tab,Sonnet,ListGroup} from "react-bootstrap";

function ForumLayout(props) {
    return (
        <>
          <NavBar/>

       

          <Container  className="mt-5">
         
             <div className="align-center">
              <label for="formGroupExampleInput" class="form-label"> <p class="text-lg-center text-info" ><h4>Форума на Книжко </h4> </p>  <img className="book-poster w-100" class="img-thumbnail" src={'https://thumbs.dreamstime.com/b/line-books-10575893.jpg '} /> </label>
              </div>
              <div type="text-sm-center" class="form-control"  > <h6> В този форум всеки може да споделя своето мнение по разлини теми. 
              Най-честите теми са препоръки за книги  и  лично творчество. </h6> </div>

              <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
           
                <Tab eventKey="addreview" title="Добави тема">

                  <Card>
                   <Card.Body>
                    <Form>
  
            <Form.Group className="mb-3" controlId="formBasicGrade">
                 <Form.Label size="sm">Избери подсекция </Form.Label>
                  <ButtonToolbar aria-label="Toolbar with button groups">
                  <ButtonGroup className="me-2" aria-label="First group" variant="outline-primary">
                  <Button  variant="outline-primary" >Общи приказки </Button> <Button variant="outline-primary">Забавни истории</Button> <Button variant="outline-primary">Препоръки</Button> 
                  <Button variant="outline-primary" >Начинания</Button> 
                  <Button variant="outline-primary"> Лично творчество</Button> 
                  </ButtonGroup>
                   </ButtonToolbar>
                 </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicInformation">
           <Form.Label size="sm" >Допълнителна информация</Form.Label>
           <Form.Control type="information" size="sm" placeholder="Въведи допълнителна информация" />
           </Form.Group>
           
       
                 <Button variant="primary" className="text-white" type="submit">
                       Публикувай
                 </Button>
          </Form>
          </Card.Body>

            </Card>

           </Tab>

                </Tabs>
   
          
              <Row>
              
                <Col >
                  {props.left}
                </Col>

              

                
              </Row>
          </Container>
        </>
    );
  }

export default ForumLayout;

//   //https://www.elana.net/ckfinder/userfiles/images/2013/ELANATrading/stacked-books-education.jpg