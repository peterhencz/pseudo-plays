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
      <div className="border-bg">
        <div className="login-container">
          <div className="login-info">
            <h1>Ez egy ilyen</h1>
            <br />
            <br />
            <br />
            <h2>
              bejelentkezos login kepernyo, 1 dives enable && disable
              button-nel, ami igazabol ketto, de ez most tokmindegy. Nem enged
              be a rendszerbe, de nem basztatja elore a felhasznalot, hogy
              hulye.
            </h2>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3>Hint: peterhencz/kiscica</h3>
          </div>
          <div className="login-screen">
            <div className="input-form">
              <div className="inputs">
                {this.state.cica && <div>cica</div>}

                <div className="input-container">
                  <p>Name</p>
                  <input
                    name="name"
                    className="input"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="input-container">
                  <p>Password</p>
                  <input
                    name="pass"
                    type="password"
                    className="input"
                    onChange={this.passValidation}
                  />
                </div>
              </div>
              <button disabled={!passIsValid} onClick={() => alert("🐈")}>
                <div className={buttonClass} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
