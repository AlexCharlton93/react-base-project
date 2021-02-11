import React from 'react';
import styled from 'styled-components';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.section`
  nav {
    background: black;
    a {
      color: white;
      text-decoration: none;
      padding-left: 20px;
      font-size: 18px;
  
      &:hover {
        color: red;
      }
    }
  
    .navbar-brand {
      color: white;
      padding-left: 0px;

      &:hover {
        color: red;
      }
    }
  }
`;

const NavRight = styled.section``;

const Header = () => {
  return (
    <HeaderWrapper>
      <Navbar expand="sm">
        <Container>
          <Navbar.Brand href="/">React App</Navbar.Brand>
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

export default Header;
