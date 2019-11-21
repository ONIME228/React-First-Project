import React from '../../../node_modules/react';
import './Header.css';
import MenuLeft from '../MenuLeft/MenuLeft';
import HeaderMenuNav from '../HeaderMenuNav/HeaderMenuNav';
import MenuRight from '../MenuRight/MenuRight';


function Header() {
    return (  
        <div className="menu-bar">
            <MenuLeft/>
            <HeaderMenuNav/>
            <MenuRight/>
        </div>
    );
}

export default Header;