import React from "react";
import {Card} from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer>
          <Card.Footer className="text-muted footer">©{new Date().getFullYear()} Can of Books</Card.Footer>
      </footer>
    );
  }
}

export default Footer;
