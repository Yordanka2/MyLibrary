import {
    Card,
    Form,
    Button,
    ButtonToolbar,
    ButtonGroup,
} from "react-bootstrap";

function FormReviews() {
    return (
        <Card>
            <Card.Body>
                <Form>
                <Card.Title  > Напиши ревю
                   </Card.Title>
                    <Form.Group className="md-3" controlId="formBasicHeading">
                        <Form.Label size="sm">Заглавае на книгата</Form.Label>
                        <Form.Control type="heading"  size="sm" placeholder="Въведи заглавие" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAuthor">
                        <Form.Label size="sm" >Автор на книгата</Form.Label>
                        <Form.Control type="author" size="sm" placeholder="Въведи автор" />
                    </Form.Group>

                       <Form.Group className="mb-3" controlId="formBasicInformation">
                        <Form.Label size="sm" >Допълнителна информация</Form.Label>
                        <Form.Control type="information" size="sm" placeholder="Въведи допълнителна информация" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicGrade">
                        <Form.Label size="sm">Оцени книгата </Form.Label>
                        <ButtonToolbar aria-label="Toolbar with button groups">
                     <ButtonGroup className="me-2" aria-label="First group" variant="outline-success">
                     <Button  variant="outline-success" >1 </Button> <Button variant="outline-success">2</Button> <Button variant="outline-success">3</Button> <Button variant="outline-success">4</Button>
                     <Button variant="outline-success">5</Button> <Button variant="outline-success" >6</Button> <Button variant="outline-success">7</Button> <Button variant="outline-success">8</Button>
                     <Button variant="outline-success">9</Button> <Button variant="outline-success">10</Button> 
                     </ButtonGroup>
                    </ButtonToolbar>
                    </Form.Group>
                    
                    <Button variant="success" type="submit">
                        Публикувай
                    </Button>
                </Form>
            </Card.Body>
    
     </Card>
            
        
    )
}


export default FormReviews;