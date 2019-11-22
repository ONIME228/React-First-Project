import React from '../../../node_modules/react';
import './ElementFirst1.css';
import Pic11 from '../../image/Photo-1-1.png';
import ShareIcon from '../../image/share.png';
import AnchorIcon from '../../image/comment.png'; 


function ElementFirst1() {
    return(
        <article className="element-first-1">
            <div className="relative margin-bottom">
                <img alt="X-symbol"  src={Pic11}/>
                <button className="share">
                    <img alt="share" src={ShareIcon}/>
                </button>
                <a className="anchor" href="#">
                    <img alt="anchor" src={AnchorIcon}/> 
                </a>
            </div>
            <div className="underlined margin-bottom"> Fashion </div>
            <h1 className="big-title margin-bottom">
                The Best Beauty Looks: Week of  
                October 13,2015
            </h1>
            <p className="description margin-bottom"> 
                There are many variations of passages of Lorem Ipsum 
                available, but the majority have suffered alteration in some 
                form, by injected humour, or randomised words...
            </p>
            <div className="small"> Dec 09 <span className="grey"> / 2015 </span></div>
        </article>
    );
}

export default ElementFirst1;