import React from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="home">DynoForm</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
