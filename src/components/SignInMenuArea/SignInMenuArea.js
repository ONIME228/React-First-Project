import React from 'react';
import './SignInMenuArea.css';
import SearchAreaForm from '../SearchAreaForm/SearchAreaForm';

function SignInMenuArea() {
    return(
        <div className="menu-right">
            <button className="right-sign-in" >
                Sign in
            </button>
            <select className="country" name="country">
                <option value="usa" className="usa">English</option>
                <option value="rus">Russian</option>
            </select>
            <SearchAreaForm/>
        </div>
    );
}

export default SignInMenuArea;