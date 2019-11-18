import React from 'react';
import './Header.css';


function App() {
  return (
    <Header>
        <div className="menu-bar">
            <form action="" method="get">
                <div className="menu-left">    
                    <a href="#"><img alt="BE-icon" className="menu-left-icons" src ="accessories/First-menu-icon.png"/> </a>
                    <a href="#"><img alt="Facebook-icon" className="menu-left-icons" src="accessories/facebook-second-icon.png"/> </a>
                    <a href="#"><img alt="Instagramm-icon" className="menu-left-icons" src="accessories/Insta-icon.png"/> </a>
                    <a href="#"><img alt="P-icon" className="menu-left-icons" src="accessories/Last-menu-icon.png"/> </a>
                </div>
            </form>           
            <nav className="menu">
                <div><a href="#">HOME      </a></div>            
                <div><a href="#">POSTTYPES </a></div>
                <div><a href="#">FEAUTURES </a></div>
                <div><a href="#">PAGES     </a></div>
                <div><a href="#">CATEGORIES</a></div>
                <div><a href="#">CONTACT   </a></div>
            </nav>
            <div className="menu-right">
                <button className="right-sign-in" >
                    Sign in
                </button>
                <select className="country" name="country">
                    <option value="usa" className="usa">English</option>
                    <option value="rus">Russian</option>
                </select>
                <form className="form" method="get">
                    <input type="search"name="search" id="search"/>
                    <label for="search"> <img className="search"  src="accessories/Search-icon.png"/></label>    
                </form>
            </div>
        </div>
    </Header>
  );
}

export default Header;