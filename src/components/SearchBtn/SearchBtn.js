import React from 'react';
import './SearchBtn.css';

const SearchBtn = () => {
  return (
    <div className='search-container'>
      <i className="fa-solid fa-magnifying-glass search-icon"/>
      <input className='search-input' type='text' placeholder='search...'/>
    </div>
  )
}

export default SearchBtn;