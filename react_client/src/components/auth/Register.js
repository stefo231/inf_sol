import React, { Component } from "react";
import Navbar from "../Navbar";

class Register extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="main-container">
          <div class="form">
            <h1>Register</h1>
            <form method="post" action="/register">
              <label>
                <span>First Name</span>
                <input type="text" name="first_name" required />
              </label>
              <label>
                <span>Last Name</span>
                <input type="text" name="last_name" required />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" required />
              </label>
              <label>
                <span>Password</span>
                <input type="password" name="password" required />
              </label>
              <label>
                <span>Re-type Password</span>
                <input type="password" name="password2" required />
              </label>
              <button type="submit">Register</button>
              <a class="reglink" href="/">
                Back to Login
              </a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
