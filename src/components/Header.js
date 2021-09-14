import React, { useEffect } from "react";
import { Navbar,Nav, Container } from "react-bootstrap";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:localStorage.getItem("user_name"),
      logStatus:localStorage.getItem("log_status"),
    };
  }

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
              <Nav.Link href="/login">
                { localStorage.getItem("log_status")?"Logout":"Login"}</Nav.Link>
            </Nav>
            {this.state.user&&
            <h4>{`Hello ${this.state.user}`}</h4>}
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Header;
