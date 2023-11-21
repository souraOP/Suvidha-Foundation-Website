import React from "react";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";

const HeaderBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <div className="container-fluid">
        <Navbar.Brand href="#home">Suvidha Foundation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Study Abroad" id="study-abroad-dropdown">
              <NavDropdown.Item href="#study-abroad-program1">
                Program 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#study-abroad-program2">
                Program 2
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="IELTS" id="ielts-dropdown">
              <NavDropdown.Item href="#ielts-preparation">
                Preparation
              </NavDropdown.Item>
              <NavDropdown.Item href="#ielts-test-dates">
                Test Dates
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#scholarships">Scholarships</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Button variant="outline-primary" className="ml-2">
              Sign In
            </Button>
            <Button variant="primary" className="ml-2">
              Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default HeaderBar;
