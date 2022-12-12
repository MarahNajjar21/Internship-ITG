import React,{ Component } from "react";

//without using jsx
/*const TestJSX = () => {
    return (
        <div classNAme='testt'>
        <h1> test JSX</h1> 
        </div> 
    )
}*/

//using jsx 
const TestJSX = () => {
    //insterd of null i may use properties such as id or className 
    return React.createElement('h1',null, React.createElement('h1',null,'test jsx'))
}
 
export default TestJSX; 