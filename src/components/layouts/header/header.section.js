import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './header.section.scss';

const Header = ({ searchContact, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Navbar bg="light" className="header" expand="lg">
        <Navbar.Brand as={Link} to="/">React Contacts App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/addcontact">Add Contact</Nav.Link>
          </Nav>
          {children}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}


Header.propTypes = {
  children: PropTypes.element
};

export default connect('', '')(Header);
