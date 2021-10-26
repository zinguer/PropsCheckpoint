import React from "react";

function Bio(props) {
    const objectstyle ={marginTop:'10%'}
  return (
    <div style = {objectstyle}>
      <h2>hello my name is {props.name} and i make horrible websites</h2>
      <img src="./public/XDAC-John-Doe.jpg" alt="jhon image" />
    </div>
  );
}

export default Bio;
