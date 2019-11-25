import React from 'react';
import './FirstRightArticleBlock.css';
import Pic31 from '../../image/Photo-3-1.png';
import InstIcon from '../../image/about-inst.png';
import TwitterIcon from '../../image/about-twitter.png';
import FacebookIcon from '../../image/about-facebook.png';


function FirstRightArticleBlock(){
    return(
        <article className="element-third-1">
            <div className="margin-bottom"><img alt="The photo of Mona Kim" src={Pic31}/></div>
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
            <div className="follow" >
                <span className="margin"> Follow </span>  
                <a href="#"><img className="margin" alt="instagram" src={InstIcon}/></a> 
                <a href="#"><img className="margin" alt="twitter" src={TwitterIcon}/></a> 
                <a href="#"><img className="margin" alt="facebook" src={FacebookIcon}/></a> 
            </div>
        </article>
    );
}

export default FirstRightArticleBlock;