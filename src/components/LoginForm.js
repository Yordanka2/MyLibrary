import {
    Card,
    Form,
    Button,
} from "react-bootstrap";

function LoginForm() {
    return (
        <Card>
            <Card.Body className="ms-2 py-2">
                <Form>
                <Card.Title  > Регистрирани потребители 
                   </Card.Title>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Имейл</Form.Label>
                        <Form.Control type="email" placeholder="Въведи имейл" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Парола</Form.Label>
                        <Form.Control type="password" placeholder="Въведи парола" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Влез
                    </Button>
                </Form>
            </Card.Body>


            <Card.Body>
             <Form>
    
             <Card.Title> Регистрация </Card.Title>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Имейл</Form.Label>
                     <Form.Control type="email" placeholder="Въведи имейл" />
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Парола</Form.Label>
                     <Form.Control type="password" placeholder="Въведи парола" />
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label> Повтори парола</Form.Label>
                     <Form.Control type="password" placeholder=" Повтори парола" />
                 </Form.Group>
                 <Button variant="primary" type="submit">
                    Създай акаунт
                 </Button>
             </Form>
         </Card.Body>
    
     </Card>
            
        
    )
}


export default LoginForm;



