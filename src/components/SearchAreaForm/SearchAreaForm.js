import React from 'react';
import './SearchAreaForm.css';
import SearchIcon from '../../image/Search-icon.png';

function SearchAreaForm() {
  return (
    <form className="form" method="get">
        <input type="search"name="search" id="search"/>
        <label htmlFor="search"> <img alt="Search icon" className="search"  src={SearchIcon} /></label>    
    </form>    
  );
}

export default SearchAreaForm;