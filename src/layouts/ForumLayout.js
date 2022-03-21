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

            
              <label for="formGroupExampleInput" class="form-label"> <p class="text-center" ><h4>Форума на Книжко </h4> </p>  <img className="book-poster" class="img-thumbnail" src={'https://www.elana.net/ckfinder/userfiles/images/2013/ELANATrading/stacked-books-education.jpg'} /> </label>
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