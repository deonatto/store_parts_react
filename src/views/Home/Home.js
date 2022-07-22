import React, { useState, useEffect } from "react";
import "./Home.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import SearchInput from "../../components/SearchInput/SearchInput";
import SortBtn from "../../components/SortBtn/SortBtn";
import Select from "../../components/Select/Select";
import List from "../../components/List/List";
import useParts from "../../hooks/useParts";

const Home = () => {
  const [types, setTypes] = useState(null);
  const [type, setType] = useState("");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState(null);

  const [parts, loading] = useParts(query, type);

  useEffect(() => {
    //get all types
    const getTypes = async () => {
      try {
        const res = await fetch("http://localhost:8081/store/part-types", {
          method: "GET",
        });
        if (res.ok) {
          const data = await res.json();
          setTypes(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getTypes();
  }, []);

  //set type selected by user
  const typeHandler = (typeSelected) => {
    if (typeSelected === "Type") {
      setType("");
    } else {
      setType(typeSelected);
    }
  };

  //set query to value inserted by user
  const queryHandler = (queryInserted) => {
    setQuery(queryInserted.toLowerCase());
  };

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
  
  const sortParts = (parts) => {
    return parts;
  };

  return (
    <Wrapper>
      <h1 className="title">Store Parts</h1>
      <div className="filters-container">
        <SearchInput changeHandler={queryHandler} />
        <Select data={types} changeHandler={typeHandler} defaultLabel="Type" />
        <SortBtn data={sort} changeHandler={sortHandler} />
      </div>
      <List data={sortParts(parts)} />
    </Wrapper>
  );
};

export default Home;
