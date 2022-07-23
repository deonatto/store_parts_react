import React from "react";
import "./SortBtn.css";

const SortBtn = ({ data, changeHandler }) => {
  return (
    <div className="sort-btn-container" onClick={() => changeHandler()}>
      <p>Sort</p>
      {data === "desc" ? (
        <i className="fa-solid fa-arrow-down" />
      ) : data === "asc" ? (
        <i className="fa-solid fa-arrow-up" />
      ) : null}
    </div>
  );
};

export default SortBtn;
