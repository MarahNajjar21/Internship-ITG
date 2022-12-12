import React from 'react'

const heading ={
//note that properties are in camel  case 
    fontSize: '72 px',
    color:'blue'
}

function Inline() {
  return (
    <div>
      <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline
