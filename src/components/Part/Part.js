import React from "react";
import "./Part.css";

const Part = ({name, price, type}) => {
  return (
    <div className="element-container">
        <p>{name}</p>
        <p>{price}</p>
        <p>{type}</p>
    </div>);
};

export default Part;
