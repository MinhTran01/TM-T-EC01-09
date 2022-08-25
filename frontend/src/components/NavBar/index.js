import React from 'react'
import Nav from 'react-bootstrap/Nav'
//import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import './NavBar.css'

const NavProduct = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Nav className="me-auto" >
                    <Container>
                    <Row>
                        <Col >
                        <Nav.Link href="#shoes">Giày/Dép</Nav.Link>
                        </Col>
                        <Col>
                        <Nav.Link href="#hat">Mũ</Nav.Link>
                        </Col>
                        <Col>
                        <Nav.Link href="#glasses">Mắt kính</Nav.Link>
                        </Col>
                        <Col>
                        <Nav.Link href="#wallet">Ví</Nav.Link>
                        </Col>
                        <Col>
                        <Nav.Link href="#jewels">Trang sức</Nav.Link>
                        </Col>
                    </Row>
                    </Container>
                </Nav>
            </Navbar>
            
        </>
    )
}

export default NavProduct