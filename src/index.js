import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "LoginPage/LoginPage.js";
import SignupPage from "./views/Components/SignupPage.js";
// import Index from "./pages/Home.js"
// import Form from "pages/Form.js"
// import Login from "pages/Login.js"
// import Signup from "pages"
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={Components} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/landing/1" component={SignupPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
