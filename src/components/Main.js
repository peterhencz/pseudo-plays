import React from "react";

import Nav from "./Nav";

const Main = props => {
  return (
    <div>
      <Nav />
      <div className="main-container"> {props.children}</div>
    </div>
  );
};

export default Main;
