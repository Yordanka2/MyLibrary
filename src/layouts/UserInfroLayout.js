import NavBar from "../components/NavBar";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

function UserInfroLayout(props) {
    return (
        <>
          <NavBar/>
          <Container  className="mt-5">
              <Row>
                <Col xs={6} md={4}>
                  {props.left}
                </Col>

                <Col xs={12} md={8}>
                  {props.right}
                
                </Col>

                
              </Row>
          </Container>
        </>
    );
  }

export default UserInfroLayout;