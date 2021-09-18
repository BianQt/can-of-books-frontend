import React from "react";
import { Navbar,Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:localStorage.getItem("user_name"),
      logStatus:localStorage.getItem("log_status"),
    };
  }

  render() {
    const isAuth = this.props.auth0.isAuthenticated;
    return (
      <header>
        <Navbar className="header shadow-sm p-3 mb-5 bg-white rounded">
          <Container>
            <Navbar.Brand className="mr-lg-5" href="/">
              <h1>Can of Books</h1>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Link href="/">Home</Link>
              <Link href="/profile">Profile</Link>
            </Nav>
          </Container>
          {isAuth ? <LogoutButton /> : <LoginButton />}
        </Navbar>
      </header>
    );
  }
}

export default withAuth0(Header);
