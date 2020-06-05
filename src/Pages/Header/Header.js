import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
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
    </>
  );
}
