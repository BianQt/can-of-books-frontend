import React from "react";
import { Form, Button } from "react-bootstrap";

class LoginForm extends React.Component {
 
  loginHandle = (e) => {
    e.preventDefault();
    const userName = e.target.user.value;
    const email = e.target.email.value;
    console.log(email);
    alert(`Hello ${userName} with ${email}`);
    this.props.userHandle(userName,email);
  };

  render() {
    return (
      <Form onSubmit={this.loginHandle}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control id="user" type="text" placeholder="Enter usename" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control id="email" type="email" placeholder="Enter email" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default LoginForm;
