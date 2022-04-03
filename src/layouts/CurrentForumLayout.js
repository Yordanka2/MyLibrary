import NavBar from "../components/NavBar";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Navbar from "../components/NavBar";


function CurrentForumLayout(props) {
    return (
        <>
        <NavBar/>
          <Container >
              <Row className="justify-content-space-between">
                <Col  >
                  {props.left}
                </Col>

              
                
              </Row>
          </Container>
        </>
    );
  }

export default CurrentForumLayout;