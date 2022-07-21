import React from "react";
import "./List.css";
import Part from "../Part/Part";

const List = ({ data }) => {
  return (
    <div className="list-container">
      {data &&
        data.map((element, index) => (
          <Part
            key={index}
            name={element.name}
            price={element.price}
            type={element.type}
          />
        ))}
    </div>
  );
};

export default List;
