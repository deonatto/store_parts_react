import React, { useState } from "react";
import "./Home.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import SearchInput from "../../components/SearchInput/SearchInput";
import SortBtn from "../../components/SortBtn/SortBtn";
import Select from "../../components/Select/Select";
import List from "../../components/List/List";
import useParts from "../../hooks/useParts";
import useTypes from "../../hooks/useTypes";

const Home = () => {
  const [type, setType] = useState(null);
  const [query, setQuery] = useState(null);
  const [sort, setSort] = useState(null);
  //custom hook for fetching parts
  const [parts, message, loading] = useParts(query, type);
  //custom hook for fetching types
  const [types] = useTypes();

  //set type selected by user
  const typeHandler = (typeSelected) => {
    if (typeSelected === "Type") {
      setType(null);
    } else {
      setType(typeSelected);
    }
  };

  //set query to value inserted by user
  const queryHandler = (queryInserted) => {
    setQuery(queryInserted.toLowerCase());
  };

  // change sort order when user clicks sort button
  // Initially, list has no sort order
  const sortHandler = () => {
    switch (sort) {
      case null:
        setSort("asc");
        break;
      case "asc":
        setSort("desc");
        break;
      case "desc":
        setSort(null);
        break;
      default:
        break;
    }
  };

  //sort array by given order
  const sortParts = (partsArray) => {
    if (partsArray.length > 0) {
      const sortedArray = [...partsArray];
      switch (sort) {
        case "asc":
          sortedArray.sort(
            (a, b) =>
              Number(a.price.replace("$", "")) -
              Number(b.price.replace("$", ""))
          );
          break;
        case "desc":
          sortedArray.sort(
            (a, b) =>
              Number(b.price.replace("$", "")) -
              Number(a.price.replace("$", ""))
          );
          break;
        default:
          break;
      }
      return sortedArray;
    } else {
      return partsArray;
    }
  };

  return (
    <Wrapper>
      <h1 className="title">Store Parts</h1>
      <div className="filters-container">
        <SearchInput queryHandler={queryHandler} />
        <Select data={types} typeHandler={typeHandler} defaultLabel="Type" />
        <SortBtn data={sort} sortHandler={sortHandler} />
      </div>
      <List data={sortParts(parts)} loading={loading} message={message}/>
    </Wrapper>
  );
};

export default Home;
