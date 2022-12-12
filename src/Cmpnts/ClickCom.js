import React from 'react'

function ClickCom() {
    function clickHandler(){
        console.log("Please taht a button has been clicked"); 
    }
  return (
    <div>
        {/*clickHandler not clickHandler() because it becomes a function call--- in class comp this would be this.clickhandler*/ }
      <button onClick={clickHandler}>Click me</button>
    </div>
  )
}

export default ClickCom
