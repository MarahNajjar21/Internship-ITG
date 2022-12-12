import React, { Component } from "react";

//this file examines rendering conditions

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isloggedin: false,
    };
  }

  render() {
    //methid 1
    /*if (this.state.isloggedin) {
      return (
        <div>
          <div> welcome marah </div>
        </div>
      );
    } else {
      return (
        <div>
          <div> welcome guest </div>
        </div>
      );
    }*/
    //methos 2
    /*let message 
    if(this.state.isloggedin){
        message=<div>welcome marah</div>
    } else{
        message=<div>welcome guest</div>
    }*/

    //method 3
    /*return(
        this.state.isloggedin ?
        <div>welcome marah</div> :
        <div>welcome guest</div>
    )*/

    //method 4
    return this.state.isloggedin && <div>welcome marah</div> 
  }
}

export default UserGreeting;
