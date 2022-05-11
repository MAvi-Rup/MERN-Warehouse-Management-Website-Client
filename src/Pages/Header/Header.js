import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to='/' className='text-danger'>Gadgets World</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to="/">Shop</Nav.Link>
                            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                        <Nav.Link as={Link} to='/aboutus'>About Us</Nav.Link>
                            {
                                user && <>
                                <Nav.Link as={Link} to='/manage'>Manage Inventory</Nav.Link>
                                
                                </>
                            }

                            {
                                user ?  <button className='btn btn-link text-body text-decoration-none' onClick={handleSignOut}>Logout</button>:<Nav.Link as={Link} to='/login'>Login</Nav.Link>
                            }
                            
                            {/* <Nav.Link as={Link} to="/register">Register</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </div>
    );
};

export default Header;