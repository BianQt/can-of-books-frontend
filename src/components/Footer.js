import React from "react";
import { Card, Button } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer style={{marginTop:"50px"}}>
          <Card.Footer className="text-muted footer">©{new Date().getFullYear()} Can of Books</Card.Footer>
      </footer>
    );
  }
}

export default Footer;
