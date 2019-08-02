import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
        <NavLink to="/">
          <p className="nav-links">🤘</p>
        </NavLink>
        <NavLink to="/anim_opt">
          <p className="nav-links">Animation Opt</p>
        </NavLink>
        <NavLink to="/scss_rf">
          <p className="nav-links">SCSS Refact</p>
        </NavLink>
        <NavLink to="/example_login">
          <p className="nav-links">Login</p>
        </NavLink>
        <NavLink to="/example_shadow">
          <p className="nav-links">Shadow</p>
        </NavLink>
      </div>
    );
  }
}

export default Nav;
