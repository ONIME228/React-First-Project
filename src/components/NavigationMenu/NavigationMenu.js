import React from 'react';
import './NavigationMenu.css';

function NavigationMenu() {
    return (
        <nav className="menu">
            <div> <a href=""> HOME      </a> </div>            
            <div> <a href=""> POSTTYPES </a> </div>
            <div> <a href=""> FEAUTURES </a> </div>
            <div> <a href=""> PAGES     </a> </div>
            <div> <a href=""> CATEGORIES</a> </div>
            <div> <a href=""> CONTACT   </a> </div>
        </nav>
    );
  }
  
  export default NavigationMenu;