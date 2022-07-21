import React, { useState, useEffect } from "react";
import "./Home.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import SearchInput from "../../components/SearchInput/SearchInput";
import SortBtn from "../../components/SortBtn/SortBtn";
import Select from "../../components/Select/Select";
import List from "../../components/List/List";

const Home = () => {
  const [types, setTypes] = useState(null);
  const [parts, setParts] = useState(null);
  const [type, setType] = useState("");
  const [query, setQuery] = useState("");

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

  useEffect(() => {
    const getUrl = () => {
      let queryString = "";
      if (query && type) {
        queryString = `?query=${query}&type=${type}`;
      } else if (!query && type) {
        queryString = `?type=${type}`;
      } else if (!type && query) {
        queryString = `?query=${query}`;
      }
      return `http://localhost:8081/store/parts${queryString}`
    };
    const url = getUrl();
    console.log(url);
    //get all types
    const getParts = async () => {
      try {
        const res = await fetch(url, {
          method: "GET",
        });
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setParts(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getParts();
  }, [query, type]);

  //set type selected by user
  const typeHandler = (typeSelected) => {
    if(typeSelected === 'Type'){
      setType("");
    }else{
      setType(typeSelected);
    }
  };

  return (
    <Wrapper>
      <h1 className="title">Store Parts</h1>
      <div className="filters-container">
        <SearchInput />
        <Select data={types} changeHandler={typeHandler} defaultLabel="Type" />
        <SortBtn />
      </div>
      <List data={parts} />
    </Wrapper>
  );
};

export default Home;
