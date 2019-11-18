import React from 'react';
import './HeaderFormRights.css';

function HeaderFormRight() {
  return (
        <HeaderFormRight>
            <form className="form" method="get">
                <input type="search"name="search" id="search"/>
                <label for="search"> <img className="search"  src="accessories/Search-icon.png"/></label>    
            </form>    
        </HeaderFormRight>
  );
}

export default HeaderFormRight;