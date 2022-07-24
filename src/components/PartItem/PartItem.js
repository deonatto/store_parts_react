import React from "react";
import "./PartItem.css";
import { useNavigate } from "react-router-dom";

const PartItem = ({ name, price, type }) => {
  const history = useNavigate();

  return (
    <div className="item-container" onClick={() => history(`/part/${name}`)}>
      <p className="item-category">{name}</p>
      <p className="item-category">{type}</p>
      <p className="item-category">{price}</p>
    </div>
  );
};

export default PartItem;
