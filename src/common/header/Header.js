import React from "react";
import styled from 'styled-components';
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.section`
  nav {
    background: black;
    a {
      color: white;
      text-decoration: none;
      font-size: 18px;
  
      &:hover {
        color: red;
      }
    }
  
    .navbar-brand {
      color: white;
      &:hover {
        color: red;
      }
    }
  }
`;

const NavRight = styled.section`
    a {
      padding-left: 20px;
      text-decoration: none;
    }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Navbar expand="sm">
        <Container>
          <Navbar.Brand href="/">DynoForm</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/">Home</Link>
            </Nav>
            <NavRight pullRight>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </NavRight>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderWrapper>
  );
}
