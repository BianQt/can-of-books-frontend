import React from "react";
import { Navbar,Nav, Container } from "react-bootstrap";

class Header extends React.Component {

  render() {
    return (
      <header>
        <Navbar className="header shadow-sm p-3 mb-5 bg-white rounded">
          <Container>
            <Navbar.Brand className="mr-lg-5" href="/">
              <h1>Can of Books</h1>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
            
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Header;
