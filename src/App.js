import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Index from "./components/Index";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Profile from "./components/Profile";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      user:'',
    };
  }

  userHandle = (user,email)=>{
    this.setState({email: email});
    console.log("fun",this.state.email);
  }


  render() {
    console.log("rend",this.state.email);
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/"> <Index email={this.state.email} /></Route>
        <Route exact path="/login"><Login userHandle={this.userHandle} /></Route>  
        <Route exact path="/profile"><Profile /></Route>  

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
    )
  }
}

export default App;
