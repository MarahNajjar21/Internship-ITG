import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Marah",
    };
    this.defineHandler = this.defineHandler.bind(this);
  }
  /* defineHandler (){
        this.setState({
            message:"Bye Bye"
        })
    }*/
  defineHandler = () => {
    this.setState({
      message: "Bye",
    });
  };
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/*<button onClick={this.defineHandler.bind(this)}>Click</button>*/}
        {/*<button onClick={()=>this.defineHandler()}>Click</button>*/}
        {/*with defining lins in render */}
        {/* <button onClick={this.defineHandler}>Click</button>*/}
        <button onClick={this.defineHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
