import React, { Component } from 'react'
import ChildCom from './ChildCom'

export class ParentCom extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         paremtName:'parent'
      }
      this.greetparents=this.greetparents.bind(this)
    }
    greetparents(childName){
        //this ``(template literals) is a feature in ES6 not specific to react 
        alert(`Hello ${this.state.paremtName} from ${childName}`)
    }
  render() {
    return (
      <div>
        {/*pass a reference of parent component to child compomonent */}
        <ChildCom greetHandler={this.greetparents}/> 
      </div>
    )
  }
}

export default ParentCom
