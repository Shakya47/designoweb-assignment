/* eslint-disable */ 
import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Logo from '../../assets/logo.png';
import './header.css';

const Header = () => {
  return (
    <div className=''>
        <Navbar fixed='top' bg='white' expand="lg">
          <Container>
            <Navbar.Brand href="#home"><img
              src={Logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto nav-options'>
                <Nav.Link href="#awards-section">Awards</Nav.Link> 
                <Nav.Link href="#caseStudy-section">Our Work</Nav.Link> 
                <a href="#contact-section" className='button-v'>Contact Us</a> 
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default Header