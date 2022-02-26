
import NavBar from "../components/NavBar";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

function ReviewsLayout(props) {
    return (
        <>
          <NavBar/>
          <Container  fluid  className="ms-2 py-2"  >
         
            <Row>
               <Col sm={11} >
                  {props.search}
               </Col>
               </Row>
            <Col sm={11}>
             {props.reviewsbook}
           </Col>
               
        
            
          </Container>
        </>
    );
  }

export default ReviewsLayout;

