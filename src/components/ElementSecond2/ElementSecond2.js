import React from '../../../node_modules/react';
import './ElementSecond2.css';
import Pic22 from '../../image/Photo-2-2.png';
import ShareIcon from '../../image/share.png';
import AnchorIcon from '../../image/comment.png';


function ElementSecond2(){
    return(
        <article className="element-second-2">
            <div className="relative margin-bottom">
                <img alt="Black and White painting of foxes"  src={Pic22}/>
                <button className="share">
                    <img alt="share" src={ShareIcon}/>
                </button>
                <a className="anchor" href="#">
                    <img alt="anchor" src={AnchorIcon}/> 
                </a>
            </div>
            <div className="underlined margin-bottom"> Fashion </div>
            <h1 className="big-title margin-bottom">
                Yes, "Plus Privilege" Exists.
                Here's What It Is
            </h1>
            <p className="description margin-bottom"> 
                There are many variations of passages of Lorem Ipsum 
                available, but the majority have suffered alteration in some 
                form, by injected humour, or randomised words...
            </p>
            <div className="small margin-bottom"> Dec 09 <span className="grey">/ 2015 </span></div>
        </article>
    );
}

export default ElementSecond2;