import React, { Component } from "react";
import Test from "./Pages/test";

export default class App extends Component {
  state = {
    divHeight: "22px",
  };

  changeDivHeight = (value) => {
    this.setState({ divHeight: `${value}px` });
  };

  render() {
    const { divHeight } = this.state;
    window.setDivHeight = divHeight;
    return (
      <div>
        <Test
          divHeight={window.setDivHeight}
          changeDivHeight={this.changeDivHeight}
        />
      </div>
    );
  }
}
