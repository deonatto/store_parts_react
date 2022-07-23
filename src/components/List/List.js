import React from "react";
import "./List.css";
import Part from "../Part/Part";
import Spinner from "../Spinner/Spinner";

const List = ({ data, loading }) => {
  return (
    <div className="list-container">
      {loading ? (
        <Spinner />
      ) : (
        data && data.map((element, index) => (
          <Part
            key={index}
            name={element.name}
            type={element.type}
            price={element.price}
          />
        ))
      )}
    </div>
  );
};

export default List;
