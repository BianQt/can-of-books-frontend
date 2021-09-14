import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LoginFrom from "./LoginForm";


class Login extends React.Component {
  
  render() {
    return (
      <main>
        <Header/>
        <LoginFrom userHandle= {this.props.userHandle} />
        <Footer />
      </main>
    );
  }
}

export default Login;
