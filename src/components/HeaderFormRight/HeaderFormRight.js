import React from '../../../node_modules/react';
import './HeaderFormRight.css';
import SearchIcon from '../../image/Search-icon.png';

function HeaderFormRight() {
  return (
    <form className="form" method="get">
        <input type="search"name="search" id="search"/>
        <label htmlFor="search"> <img alt="Search icon" className="search"  src={SearchIcon} /></label>    
    </form>    
  );
}

export default HeaderFormRight;