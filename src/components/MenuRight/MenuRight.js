import React from '../../../node_modules/react';
import './MenuRight.css';
import HeaderFormRight from '../HeaderFormRight/HeaderFormRight';

function MenuRight() {
    return(
        <div className="menu-right">
            <button className="right-sign-in" >
                Sign in
            </button>
            <select className="country" name="country">
                <option value="usa" className="usa">English</option>
                <option value="rus">Russian</option>
            </select>
            <HeaderFormRight/>
        </div>
    );
}

export default MenuRight;