import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #8e44ad;
  }
  .navbar-brand,
  .navbar-nav {
    color: #ecf0f1;

    &: hover {
      color: #ecf0f1;
    }
    .nav-bar-custom {
      color: #f5f6fa;
    }
  }
`;

export const NaviBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">IDK</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/" className="nav-bar-custom">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about" className="nav-bar-custom">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contacts" className="nav-bar-custom">
              Contacts
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
