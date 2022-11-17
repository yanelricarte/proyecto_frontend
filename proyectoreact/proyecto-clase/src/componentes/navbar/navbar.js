import React from "react";
import "./navbar.css";

import {Container,Nav,Navbar} from 'react-bootstrap'

const Menu = () => {

    return (
        <header>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href=""> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Cosme fulanito </Nav.Link>
                        <Nav.Link href="/contacto">Contacto</Nav.Link>
                        <Nav.Link href="/personajes"> Personajes</Nav.Link>
                        <Nav.Link href="/ejemplo"> Ejemplo</Nav.Link>

                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
    );
};
export default Menu;
