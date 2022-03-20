import NavBar from "../components/NavBar";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

function ForumLayout(props) {
    return (
        <>
          <NavBar/>
          <Container  className="mt-5">

        
              <label for="formGroupExampleInput" class="form-label"><h4> Форума на Книжко  </h4> </label>
              <div type="text" class="form-control"  > <h6> В този форум всеки може да споделя своето мнение по разлини теми. 
              Най-честите теми са препоръки за книги  и  лично творчество. </h6> </div>
          
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