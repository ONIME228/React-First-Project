import React from 'react';
import './HeaderMenuNav.css';


function HeaderMenuNav() {
    return (
        <HeaderMenuNav>
            <nav className="menu">
                <div><a href="#">HOME      </a></div>            
                <div><a href="#">POSTTYPES </a></div>
                <div><a href="#">FEAUTURES </a></div>
                <div><a href="#">PAGES     </a></div>
                <div><a href="#">CATEGORIES</a></div>
                <div><a href="#">CONTACT   </a></div>
            </nav>
        </HeaderMenuNav>
    );
  }
  
  export default HeaderMenuNav;