import React from '../../../node_modules/react';
import './ElementFourth2.css';
import Pic24 from '../../image/Photo-2-4.png';
import ShareIcon from '../../image/share.png';
import AnchorIcon from '../../image/comment.png';

function ElementFourth2(){
    return(
        <article className="element-second-4">
            <div className="relative margin-bottom">
                <img alt="Caligraphic Q-letter" src={Pic24}/>
                <button className="share">
                    <img alt="share" src={ShareIcon}/>
                </button>
                <a className="anchor" href="#">
                    <img alt="anchor" src={AnchorIcon}/> 
                </a>
            </div>
            <div className="underlined margin-bottom"> Make up </div>
            <h1 className="big-title margin-bottom">
                Paris Fashion Week Highlights: 
                Vogue's Anna Wintour on All the Top Shows
            </h1>
            <p className="description margin-bottom"> 
                There are many variations of passages of Lorem Ipsum 
                available, but the majority have suffered alteration...
            </p>
            <div className="small margin-bottom"> Dec 09 <span className="grey">/ 2015 </span></div>
        </article>
    );
}

export default ElementFourth2;