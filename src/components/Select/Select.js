import React from "react";
import "./Select.css";

const Select = ({ data, typeHandler, defaultLabel }) => {
  return (
    <select
      onChange={(event) => typeHandler(event.target.value)}
      defaultValue={defaultLabel}
    >
      <option value={defaultLabel}>{defaultLabel}</option>
      {data &&
        data.map((element, index) => (
          <option value={element} key={index}>
            {element}
          </option>
        ))}
    </select>
  );
};

export default Select;
