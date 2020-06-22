import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const NavBar = (props) => {
    
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#browse">Browse</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Book Search ..." className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    );
};

export default NavBar;
