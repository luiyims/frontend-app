import React from "react";
import { Navbar, Container, Nav, NavDropdown, Row, Col, Button, Card } from 'react-bootstrap';
import { NavbarBrand } from "./NavbarBrand";

import '../styles/NavbarHead.css';

export const NavbarHead = () => {
    return <Navbar className="bg-blue navbar-expand-md navbar-dark fixed-top">
        <Container>
            <NavbarBrand />
            <Nav className="me-auto">
                <Nav.Link href="/" className="text-nav">Home</Nav.Link>
                <Nav.Link href="/trending-movies" className="text-nav">Trending Movies</Nav.Link>
                <Nav.Link href="/genres-movies" className="text-nav">Genres Movies</Nav.Link>
            </Nav>
        </Container>
    </Navbar>;
};
