import NavBar from "../components/NavBar";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

function LayoutBooks(props) {
    return (
        <>
          <NavBar/>
          <Container >
              <Row>
         <Col sm={4}>
         
         {props.left}
         </Col>
         <Col sm={8}>
         {props.right}
         </Col>
         </Row>
          </Container>
        </>
    );
  }

export default LayoutBooks;