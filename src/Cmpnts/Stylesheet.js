import React from 'react'
import './Mystyle.css'


function Stylesheet(props) {
    let classNAme='primary'
  return (
    <div>
        {/*this is how i can apply more than one class */}
      <h1 className={`${classNAme} font-xl`}>style</h1>
    </div>
  )
}

export default Stylesheet
