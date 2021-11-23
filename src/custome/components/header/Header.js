import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <Navbar className='header' variant="light">
        <Container>
        <Navbar.Brand href="/home"><h1 className='nav-brand'>As-Salaf</h1></Navbar.Brand>
        <Nav className="mx-end">
          <Link className="link" to="/home">Home</Link>
          <Link className="link" to="/courses">Courses</Link>
          <Link className="link" to="/teachers">Teachers</Link>
          <Link className="link" to="/about">About Us</Link>
        </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;