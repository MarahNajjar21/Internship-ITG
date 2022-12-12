import React, { Component } from "react";

/*class TestClass extends Component {
    render() {
        return <h1>test class component</h1>
    }
}*/

class StateCom extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Marah, this is a trial for state",
    };
  }

  changeMessage() {
    this.setState({
        message: "Thank you for subscribing"
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default StateCom;
