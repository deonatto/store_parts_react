import React from "react";
import "./Part.css";
import {useNavigate} from 'react-router-dom';

const Part = ({name, price, type}) => {
  const history = useNavigate();

  const goToPartPage = () =>{
    //send to part page
    history(`/part?name=${name}&type=${type}&price=${price}`);
  }

  return (
    <div className="element-container" onClick={goToPartPage}>
        <p className="element-category">{name}</p>
        <p className="element-category">{type}</p>
        <p className="element-category">{price}</p>
    </div>);
};

export default Part;
