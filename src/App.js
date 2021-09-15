import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Books from "./components/BestBooks";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Profile from "./components/Profile";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';
import { withAuth0 } from '@auth0/auth0-react';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  loginHandler = (user) => {
    this.setState({
      user,
    });
  };

  logoutHandler = () => {
    this.setState({
      user: null,
    });
  };

  render() {
    const isAuth = this.props.auth0.isAuthenticated;
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {isAuth ? <Books /> : <Login />}
            </Route>
            <Route exact path="/profile">
              {isAuth && <Profile />}
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
