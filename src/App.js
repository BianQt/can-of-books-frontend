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

  render() {

    return (
      <div >
      <Header />
      <BrowserRouter>
      <Switch>
        <Route exact path="/"> <Index /></Route>
        <Route exact path="/login"><Login /></Route>  
        <Route exact path="/profile"><Profile /></Route>  
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
     <Footer/>
     </div>
    )
  }
}

export default App;
