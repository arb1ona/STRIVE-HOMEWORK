import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = (props) => {
  
  return (
    
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        {props.title} - Enrich your life!
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#link">Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
