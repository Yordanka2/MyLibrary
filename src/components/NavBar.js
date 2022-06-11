import {
    Navbar,
    Container,
    Nav,
} from "react-bootstrap";

import {Link} from 'react-router-dom';
import {queryClient} from "../index";

function NavBar() {
    const currentUser = queryClient.getQueryData('currentUser');
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand bg="dark" as={Link} to="/"> <p class=" fw-normal fs-4" > Книжко- онлайн библиотека за деца </p> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                {currentUser && <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link bg="dark" as={Link} to="/books"><p class=" fw-normal fs-4" > Книги </p> </Nav.Link>
                        <Nav.Link bg="dark" as={Link} to="/forum"> <p class=" fw-normal fs-4" > Форум </p> </Nav.Link>
                        <Nav.Link bg="dark" as={Link} to="/helpcenter"><p class=" fw-normal fs-4" >Помощ </p> </Nav.Link>
                        <Nav.Link bg="dark" as={Link} to="/userinfo"> <p class=" fw-normal fs-4" >Профил </p> </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                 }

            </Container>
        </Navbar>
    )
}

export default NavBar;