import React from '../../../node_modules/react';
import './ElementFirst3.css';


function ElementFirst3(){
    return(
        <article className="element-third-1">
            <div className="margin-bottom"><img alt="The photo of Mona Kim" src=""/></div>
            <div className="aside-box margin-bottom">
                <h1 className="underlined-aside "> About me </h1>
            </div>
            <div className="name-aside margin-bottom"> Mona-Kim </div>
            <p className="description-aside margin-bottom" > 
                The standart chunk of Lovrem Ipsum used 
                since the 1500s is reproduced below for those 
                interested. Sections 1.10.32 and 1.10.33 from 
                "de Finibus Bonorum et Malorum" 
            </p>
            <span className="follow" >
                Follow 
                <a href="#"><img alt="instagram" src=""/></a> 
                <a href="#"><img alt="twitter" src=""/></a> 
                <a href="#"><img alt="facebook" src=""/></a> 
            </span>
        </article>
    );
}

export default ElementFirst3;