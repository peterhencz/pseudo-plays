import React, { Component } from "react";

class Login extends Component {
  state = {
    name: "",
    pass: "",
    passIsValid: false,
  };

  passValidation = event => {
    if (event.target.value === "kiscica") {
      this.setState({
        passIsValid: true,
      });
    } else {
      this.setState({
        passIsValid: false,
      });
    }
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { name, pass, passIsValid } = this.state;
    const buttonClass = passIsValid ? "login-button enable" : "login-button";
    console.log(
      "name: ",
      name,
      "pass: ",
      pass,
      "passIsValid: ",
      passIsValid,
      "button:",
      buttonClass
    );

    return (
      <div>
        <h2>kiscica</h2>
        <div className="input-form">
          <p>name</p>
          <input
            name="name"
            className="input"
            onChange={this.handleInputChange}
          />
          <p>pass</p>
          <input
            name="pass"
            type="password"
            className="input"
            onChange={this.passValidation}
          />
          <div className={buttonClass} disabled={!passIsValid} />
        </div>
      </div>
    );
  }
}

export default Login;
