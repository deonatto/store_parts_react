import React, { useState} from "react";
import "./Home.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import SearchInput from "../../components/SearchInput/SearchInput";
import SortBtn from "../../components/SortBtn/SortBtn";
import Select from "../../components/Select/Select";
import List from "../../components/List/List";
import useParts from "../../hooks/useParts";
import useTypes from "../../hooks/useTypes";

const Home = () => {
  const [type, setType] = useState("");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState(null);
  //custom hook for fetching parts
  const [parts, loading] = useParts(query, type);
  //custom hook for fetching types
  const [types] = useTypes();

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
  
  const sortParts=(partsArray)=>{
    if(partsArray){
      const sortedArray = [...partsArray];
      switch (sort) {
        case "asc":
          sortedArray.sort((a, b)=> Number(a.price.replace("$","")) - Number(b.price.replace("$","")));
          break;
        case "desc":
          sortedArray.sort((a, b)=> Number(b.price.replace("$","")) - Number(a.price.replace("$","")));
          break;
        default:
          break;
      }
      return sortedArray;
    }
  }

  return (
    <Wrapper>
      <h1 className="title">Store Parts</h1>
      <div className="filters-container">
        <SearchInput changeHandler={queryHandler} />
        <Select data={types} changeHandler={typeHandler} defaultLabel="Type" />
        <SortBtn data={sort} changeHandler={sortHandler} />
      </div>
      <List data={sortParts(parts)} loading={loading}/>
    </Wrapper>
  );
};

export default Home;
