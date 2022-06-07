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
                <Navbar.Brand bg="dark" as={Link} to="/">Онлайн библиотека за деца</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                {currentUser && <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/books">Книги</Nav.Link>
                        <Nav.Link as={Link} to="/forum">Форум</Nav.Link>
                        <Nav.Link as={Link} to="/helpcenter">Помощ</Nav.Link>
                        <Nav.Link as={Link} to="/userinfo">Профил</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                }

            </Container>
        </Navbar>
    )
}

export default NavBar;