import React from "react";
import "./SortBtn.css";

const SortBtn = ({ data, sortHandler }) => {
  return (
    <div className="sort-btn-container" onClick={sortHandler}>
      <p>Sort</p>
      {data === "desc" ? (
        <i className="fa-solid fa-arrow-down sort-icon" />
      ) : data === "asc" ? (
        <i className="fa-solid fa-arrow-up sort-icon" />
      ) : null}
    </div>
  );
};

export default SortBtn;
