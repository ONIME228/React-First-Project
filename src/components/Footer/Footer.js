import React from '../../../node_modules/react';
import './Footer.css';

function Footer(){
    return(
        <div className="footer  ">
            <div className="footer-white">
                <div className="white-elements">    
                    <div> ©VLOGER 2015. </div>
                    <div> Made with by beautheme.com. All rights Reserved. </div>
                </div>     
            </div>
            <div className="footer-grey">
                <div className="grey-elements">
                    <a href="#"> ABOUT US </a>
                    <a href="#"> CONTACT US </a>
                    <a href="#"> SITE MAP </a>
                    <a href="#"> RSS </a>
            </div>       
            </div>
        </div>
    );
}

export default Footer;