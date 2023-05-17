import React from "react";
import { Navbar } from 'react-bootstrap';
import logo from "../assets/images/logo.png"

export const NavbarBrand = () => {
    return <Navbar.Brand href="/">
        <img src={logo} alt="logo" className="img-thumbnail rounded mx-auto d-block" />
    </Navbar.Brand>;
};
