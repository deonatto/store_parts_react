import React, { useState } from "react";
import "./SearchInput.css";

const SearchInput = ({ queryHandler }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="search-container">
      <i
        className="fa-solid fa-magnifying-glass search-icon"
        onClick={() => queryHandler(searchValue)}
      />
      <input
        className="search-input"
        type="text"
        placeholder="search..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        onKeyDown={(event) =>
          event.key === "Enter" && queryHandler(searchValue)
        }
      />
    </div>
  );
};

export default SearchInput;
