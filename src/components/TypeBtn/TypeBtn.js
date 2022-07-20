import React from 'react';
import './TypeBtn.css';

const TypeBtn = ({types, typeHandler}) => {

  const handleChange=(event)=>{
    typeHandler(event.target.value);
  }
  
  return (
      <select onChange={handleChange} >
        <option value="none" selected disabled hidden>Type</option>
        {types && types.map((type,index)=>(
          <option value={type} key={index}>{type}</option>
        ))}
      </select>
  )
}

export default TypeBtn;