import React from '../../../node_modules/react';
import './HeaderMenuNav.css';
function HeaderMenuNav() {
    return (
        <div>
            <nav className="menu">
                <div><a href="">HOME      </a></div>            
                <div><a href="">POSTTYPES </a></div>
                <div><a href="">FEAUTURES </a></div>
                <div><a href="">PAGES     </a></div>
                <div><a href="">CATEGORIES</a></div>
                <div><a href="">CONTACT   </a></div>
            </nav>
        </div>
    );
  }
  
  export default HeaderMenuNav;