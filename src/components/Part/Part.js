import React from "react";
import "./Part.css";

const Part = ({name, price, type}) => {
  return (
    <div className="element-container">
        <p>{name}</p>
        <p>{type}</p>
        <p>{price}</p>
    </div>);
};

export default Part;
