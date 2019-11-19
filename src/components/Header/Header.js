import React from '../../../node_modules/react';
import './Header.css';
import HeaderMenuNav from '../HeaderMenuNav/HeaderMenuNav';
import HeaderFormRight from '../HeaderFormRight/HeaderFormRight';


function Header() {
  return (
    <div>
        <div className="menu-bar">
            <form action="" method="get">
                <div className="menu-left">    
                    <a href=""><img alt="BE-icon" className="menu-left-icons" src ="../../image/First-menu-icon.png"/> </a>
                    <a href=""><img alt="Facebook-icon" className="menu-left-icons" src=""/> </a>
                    <a href=""><img alt="Instagramm-icon" className="menu-left-icons" src=""/> </a>
                    <a href=""><img alt="P-icon" className="menu-left-icons" src=""/> </a>
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
    </div>
  );
}

export default Header;