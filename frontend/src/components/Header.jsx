import React from "react";
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
  // const {cartItems} = useSelector(state => state.cart)
  // const {userInfo} = useSelector(state => state.auth)

  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="Shop" />
              Shop
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart />
                  Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <FaUser />
                  Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
