import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Baneer from '../Home/Banner/Baneer';
import Section from '../SectionExtra/Section1';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className='text-danger'>Gadgets World</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#shop">Shop</Nav.Link>
                            <Nav.Link href="#blogs">Blog</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Baneer></Baneer>
            <Section></Section>
        </div>
    );
};

export default Header;