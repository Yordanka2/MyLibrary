import NavBar from "../components/NavBar";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Card, Form, Button, ButtonGroup, Modal,ButtonToolbar,Tabs,Tab,Sonnet,ListGroup} from "react-bootstrap";

function CenterLayout(props) {
 
            return (
        <>
          <NavBar/>
          <Container  className="mt-5">
              <Row>
                <Col >
                  {props.left}
                </Col>

              

            
              </Row>
          </Container>
        </>
    );
  }
       

export default CenterLayout;