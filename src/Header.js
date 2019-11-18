import React from 'react';
import './Header.css';
import HeaderMenuNav from './HeaderMenuNav';
import HeaderFormRight from './HeaderFormRight';


function Header() {
  return (
    <Header>
        <div className="menu-bar">
            <form action="" method="get">
                <div className="menu-left">    
                    <a href="#"><img alt="BE-icon" className="menu-left-icons" src ="./accessories/First-menu-icon.png"/> </a>
                    <a href="#"><img alt="Facebook-icon" className="menu-left-icons" src="./accessories/facebook-second-icon.png"/> </a>
                    <a href="#"><img alt="Instagramm-icon" className="menu-left-icons" src="./accessories/Insta-icon.png"/> </a>
                    <a href="#"><img alt="P-icon" className="menu-left-icons" src="./accessories/Last-menu-icon.png"/> </a>
                </div>
            </form>           
            <HeaderMenuNav/>
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
        </div>
    </Header>
  );
}

export default Header;