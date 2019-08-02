import React, { Component } from "react";

class Index extends Component {
  render() {
    return (
      <div>
        <div className="balls-container">
          <div className="info">
            <h1>Animation Optimization</h1>
            <br />
            <br />
            <h2>&&</h2>

            <h2>SCSS Refact</h2>
            <h2>Pseudo-elements tips</h2>
            <br />
            <h2>🤘</h2>
          </div>
          <div className="cica">
            <div className="ball" />
            <div className="ball" />
            <div className="ball" />
            <div className="ball" />
            <div className="shadow" />
            <div className="shadow" />
            <div className="shadow" />
            <div className="shadow" />
          </div>
          <div class="wrapper w1">
            <div class="desk">
              <div class="side  front" />
              <div class="side   left" />
              <div class="side    top" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
