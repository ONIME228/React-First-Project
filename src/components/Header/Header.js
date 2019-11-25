import React from '../../../node_modules/react';
import './Header.css';
import SocialMediaAnchors from '../SocialMediaAnchors/SocialMediaAnchors';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import SignInMenuArea from '../SignInMenuArea/SignInMenuArea';


function Header() {
    return (  
        <div className="menu-bar">
            <SocialMediaAnchors/>
            <NavigationMenu/>
            <SignInMenuArea/>
        </div>
    );
}

export default Header;