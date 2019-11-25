import React from 'react';
import './SocialMediaAnchors.css';
import BeIcon from '../../image/First-menu-icon.png';
import FacebookIcon from '../../image/facebook-second-icon.png';
import InstagramIcon from '../../image/Insta-icon.png';
import PIcon from '../../image/Last-menu-icon.png';

function SocialMediaAnchors(){
    return(
        <div className="menu-left">    
            <a href=""><img alt="BE-icon"         className="menu-left-icons" src={BeIcon}/>  </a>
            <a href=""><img alt="Facebook-icon"   className="menu-left-icons" src={FacebookIcon} />  </a>
            <a href=""><img alt="Instagramm-icon" className="menu-left-icons" src={InstagramIcon} />  </a>
            <a href=""><img alt="P-icon"          className="menu-left-icons" src={PIcon} />  </a>
        </div>
    );
}

export default SocialMediaAnchors;