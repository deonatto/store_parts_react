import React from "react";
import "./List.css";
import Part from "../Part/Part";
import Spinner from "../Spinner/Spinner";

const List = ({ data, loading }) => {
  return (
    <div className="list-container">
      <div className="list-titles-container">
        <h2>Name</h2>
        <h2>Type</h2>
        <h2>Price</h2>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        data.length > 0 ? data.map((element, index) => (
          <Part
            key={index}
            name={element.name}
            type={element.type}
            price={element.price}
          />
        )) : <h3 className="list-message">No match found</h3>
      )}
    </div>
  );
};

export default List;
