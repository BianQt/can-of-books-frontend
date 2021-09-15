import React from "react";
import {Card} from "react-bootstrap";
import LoginButton from "./LoginButton";

class Login extends React.Component {
  
  render() {
    return (
      <main>
         <Card className="login-card">
        <Card.Body>
          <Card.Title>Share Your Favourit Books<br/>with Us Now!</Card.Title>
          <LoginButton />
          <Card.Text>
            Click to Log In 
          </Card.Text>
        </Card.Body>
        </Card>
      </main>
    );
  }
}

export default Login;
