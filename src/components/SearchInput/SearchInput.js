import React from 'react';
import './SearchInput.css';

const SearchInput = () => {
  return (
    <div className='search-container'>
      <i className="fa-solid fa-magnifying-glass search-icon"/>
      <input className='search-input' type='text' placeholder='search...'/>
    </div>
  )
}

export default SearchInput;