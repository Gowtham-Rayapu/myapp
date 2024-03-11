import React from "react";
export default function App1(props){
  
  return (
    <div style={{backgroundColor:"yellow"}}>
      Hello {props.name}.you are{props.age}
      </div>
  );
}
App1.defaultProps={name:"cathy" ,age:20};