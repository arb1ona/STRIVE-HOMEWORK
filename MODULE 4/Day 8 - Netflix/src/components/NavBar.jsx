import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from 'react-router-dom'


const NavBar = (props) => (
  <Navbar variant="dark" expand="lg">
    <Link to="/">
      <Navbar.Brand href="#home">
        <Image
          src="/assets/logo.png"
          style={{ width: "100px", height: "55px" }}
        />
      </Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">TV Shows</Nav.Link>
        <Nav.Link href="#link">Movies</Nav.Link>
        <Nav.Link href="#link">Recently Added</Nav.Link>
        <Nav.Link href="#link">My List</Nav.Link>
        <Link to="/register" className="nav-link">Register</Link>
        {/* <Link to="/reservation"
          className={
            this.props.location.pathname === '/reservation'
              ? "nav-link active"
              : "nav-link"
          }>
          Reservation
            </Link> */}
      </Nav>
      <div className="d-flex my-3 my-lg-0">
        <i className="fa fa-search icons mr-3"></i>
        <div id="kids">KIDS</div>
        <i className="fa fa-bell icons mx-3"></i>
        <i className="fa fa-user icons mx-3"></i>
      </div>

    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
