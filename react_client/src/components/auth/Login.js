import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

class Login extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="main-container">
          <div class="form">
            <h1>Log in</h1>
            <form method="post" action="/">
              <label>
                <span>Email</span>
                <input type="email" name="email" required />
              </label>
              <label>
                <span>Password</span>
                <input type="password" name="password" required />
              </label>
              <button type="submit">Log In</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
