import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
            <Nav className="mr-auto">
                <Link to="/" className="nav-link">Home</Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#browse">Browse</Nav.Link>
                <Link to="/register" className="nav-link">Register</Link>
            </Nav>
        </Navbar>
    );
};

export default NavBar;
