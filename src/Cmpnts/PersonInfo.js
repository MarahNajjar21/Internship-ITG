import React from 'react'

function PersonInfo({info}) {
  return (
    <div>
      <h2>I am {info.name} and I am {info.age} years old</h2>
    </div>
  )
}

export default PersonInfo
