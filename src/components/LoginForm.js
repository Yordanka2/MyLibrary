import {
    Card,
    Form,
    Button,
} from "react-bootstrap";

function LoginForm() {
    return (
        <Card>
            <Card.Body>
                <Form>
                <Card.Title  > Login form for users with account 
                   </Card.Title>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Card.Body>


            <Card.Body>
             <Form>
    
             <Card.Title> Login form for new users  </Card.Title>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Email address</Form.Label>
                     <Form.Control type="email" placeholder="Enter email" />
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" placeholder="Password" />
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" placeholder=" Repeat Password" />
                 </Form.Group>
                 <Button variant="primary" type="submit">
                     Create account
                 </Button>
             </Form>
         </Card.Body>
    
     </Card>
            
        
    )
}


export default LoginForm;



