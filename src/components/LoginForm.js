import {
    Card,
    Form,
    Button,
    Tabs,
    Tab,
} from "react-bootstrap";

import RegisterForm from "./RegisterForm";

function LoginForm() {

    return (
        <Card>
            <Card.Body className="p-5">
                <Tabs defaultActiveKey="register" className="mb-3 nav-justified">
                    <Tab eventKey="register" title="Регистрация">
                        <RegisterForm/>
                    </Tab>
                    <Tab eventKey="login" title="Влез">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Имейл</Form.Label>
                                <Form.Control type="email" placeholder="Въведи имейл"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Парола</Form.Label>
                                <Form.Control type="password" placeholder="Въведи парола"/>
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button variant="primary" className="text-white" type="submit">
                                    Влез
                                </Button>
                            </div>
                        </Form>
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>
    )
}


export default LoginForm;



