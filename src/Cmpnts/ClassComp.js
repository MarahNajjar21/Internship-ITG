import React, { Component } from "react";

/*class TestClass extends Component {
    render() {
        return <h1>test class component</h1>
    }
}*/

/*class TestClass extends Component {
    render() {
        return <h1> {this.props.name} mother name is {this.props.motherName}</h1>
    }
}*/

//extract props 
class TestClass extends Component {
    render() {
        const {name,motherName}=this.props; 
        return <h1> {name} mother name is {motherName}</h1>
    }
}

export default TestClass 