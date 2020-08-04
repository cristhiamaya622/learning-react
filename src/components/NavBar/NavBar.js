import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/imgs/medisign.png';
import './NavBar.scss';

function NavBar() {
  return (
    <Navbar bg="light" fixed="top" >
      <Navbar.Brand href="#home">
      <img src={logo} className="navbar__logo" alt="logo" />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;