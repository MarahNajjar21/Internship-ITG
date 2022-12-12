import React from "react";
//case sensitive, class names should start witrh capital letter - standard 
/*function Test(){
    return <h1>hello Marah</h1>; 
}*/

//using ES6 jsx
//const Test = () => <h1>hello Marah</h1>

//with props so we can change attrubutes from app file 
const Test = (props) => {
    return (<div>
        <h1> {props.name} mother name is {props.motherName}</h1>
        {props.children}
    </div>
    )
}

//so it can be rendered - can be imported usign any name but if i wrote export const .... i must import the same name
export default Test; 