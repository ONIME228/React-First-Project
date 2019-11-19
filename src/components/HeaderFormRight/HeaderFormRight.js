import React from '../../../node_modules/react';
import './HeaderFormRight.css';

function HeaderFormRight() {
  return (
        <div>
            <form className="form" method="get">
                <input type="search"name="search" id="search"/>
                <label for="search"> <img alt="Search icon" className="search"  src="./image/Search-icon.png"/></label>    
            </form>    
        </div>
  );
}

export default HeaderFormRight;