import React from 'react';
import './Home.css';
import Wrapper from '../../components/Wrapper/Wrapper';
import SearchBtn from '../../components/SearchBtn/SearchBtn';
import SortBtn from '../../components/SortBtn/SortBtn';
import TypeBtn from '../../components/TypeBtn/TypeBtn';

const Home = () => {
  return (
    <Wrapper>
      <h1 className='title'>Store Parts</h1>
      <div className='btns-container'>
        <SearchBtn />
        <TypeBtn />
        <SortBtn />
      </div>
    </Wrapper>
  )
}

export default Home;