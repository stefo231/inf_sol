import React, { Component } from "react";
import { Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
// import Home from "./components";
// import Portfolio from "./components/Portfolio";
// import Contacts from "./components/Contacts";

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <>
          <CssBaseline />
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          {/* <Route path="/portfolio" component={Portfolio} /> */}
          {/* <Route path="/contacts" component={Contacts} />  */}
        </>
      </div>
    );
  }
}
