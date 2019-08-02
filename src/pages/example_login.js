import React, { Component } from "react";

class Login extends Component {
  state = {
    name: "",
    pass: "",
    passIsValid: false,
    cica: false,
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
    const { passIsValid } = this.state;
    const buttonClass = passIsValid ? "login-button-enable" : "login-button";

    return (
      <div className="login-container">
        <div className="login-info">
          <h1>Ez egy ilyen</h1>
          <h2>bejelentkezős képernyő</h2>
        </div>
        <div className="login-screen">
          <div className="input-form">
            <div className="inputs">
              {this.state.cica && <div>cica</div>}
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
            </div>
            <button disabled={!passIsValid} onClick={() => alert("🐈")}>
              <div className={buttonClass} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
