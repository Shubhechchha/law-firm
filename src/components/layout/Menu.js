import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


const Menu = () => {
    return (
        <>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Nav className="me-auto">
                            <Nav.Link href ="/">Lawyers</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default Menu