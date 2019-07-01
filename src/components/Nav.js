import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
        <NavLink to="/">
          <p className="nav-links">🙃</p>
        </NavLink>
        <NavLink to="/example_login">
          <p className="nav-links">login</p>
        </NavLink>
        <NavLink to="/example_shadow">
          <p className="nav-links">shadow</p>
        </NavLink>
      </div>
    );
  }
}

export default Nav;
