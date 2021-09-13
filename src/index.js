import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Index from "./components/Index";
import Login from "./components/Login";
import Profile from "./components/Profile";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props =><Index {...props} />} />
      <Route path="/login" exact render={props => <Login {...props} />} />
      <Route
        path="/profile"
        exact
        render={props => <Profile {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
