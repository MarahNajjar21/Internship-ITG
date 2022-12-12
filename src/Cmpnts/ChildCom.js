import React from 'react'

function ChildCom(props) {
  return (
    <div>
         <button onClick={()=>props.greetHandler('Child')}>Greet Parent</button> 
     {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
    </div>
  )
}

export default ChildCom
