
import {
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";

function ReviewLayout(props) {
    return (
        <>         
    <Container >
              <Row>
         <Col >
         
         {props.left}
         </Col>
         <Col >
         {props.right}
         </Col>
         </Row>
      </Container>
         
        </>
    );
  }

export default ReviewLayout;