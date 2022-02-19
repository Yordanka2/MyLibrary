import {
    Navbar, 
    Container,
    Nav,
} from "react-bootstrap";

import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg" >
            <Container>
            <Navbar.Brand href="#" bg="dark ">Онлайн библиотека за деца</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" >
                    <Nav.Link as={Link} to="/">Начална страница </Nav.Link>
                    <Nav.Link as={Link} to="/forecast">Forecast</Nav.Link>
                    <Nav.Link as={Link} to="/books">Книги</Nav.Link>
                    <Nav.Link as={Link} to="/user">Ревюта</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;