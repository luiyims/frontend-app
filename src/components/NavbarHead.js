import React from "react";
import { Navbar, Container, Nav, NavDropdown, Row, Col, Button, Card } from 'react-bootstrap';
import { NavbarBrand } from "./NavbarBrand";


export const NavbarHead = () => {
    return <Navbar className="bg-blue navbar navbar-expand-md navbar-dark fixed-top">
        <Container>
            <NavbarBrand />
            <Nav className="me-auto">
                <Nav.Link href="/" className="text-white">Home</Nav.Link>
                <Nav.Link href="/trending-movies" className="text-white">Trending Movies</Nav.Link>
            </Nav>
        </Container>
    </Navbar>;
};
