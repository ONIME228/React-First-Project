import React from '../../../node_modules/react';
import './MenuLeft.css';

function MenuLeft(){
    return(
        <div className="menu-left">    
            <a href=""><img alt="BE-icon"         className="menu-left-icons" src=""/>  </a>
            <a href=""><img alt="Facebook-icon"   className="menu-left-icons" src=""/>  </a>
            <a href=""><img alt="Instagramm-icon" className="menu-left-icons" src=""/>  </a>
            <a href=""><img alt="P-icon"          className="menu-left-icons" src=""/>  </a>
        </div>
    );
}

export default MenuLeft;