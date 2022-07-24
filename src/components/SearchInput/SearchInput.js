import React, { useState } from "react";
import "./SearchInput.css";

const SearchInput = ({ changeHandler }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="search-container">
      <i
        className="fa-solid fa-magnifying-glass search-icon"
        onClick={() => changeHandler(searchValue)}
      />
      <input
        className="search-input"
        type="text"
        placeholder="search..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        onKeyDown={(event) =>
          event.key === "Enter" && changeHandler(searchValue)
        }
      />
    </div>
  );
};

export default SearchInput;
