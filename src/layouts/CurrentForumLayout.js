import NavBar from "../components/NavBar";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

function CurrentForumLayout(props) {
    return (
        <>
          <NavBar/>
          <Container  className="mt-5">
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

export default CurrentForumLayout;