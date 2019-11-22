import React from '../../../node_modules/react';
import './ElementThird2.css';
import Pic23 from '../../image/Photo-2-3.png';
import ShareIcon from '../../image/share.png';
import AnchorIcon from '../../image/comment.png';


function ElementThird2(){
    return(
        <article className="element-second-3">
            <div className="relative margin-bottom">
                <img alt="Man walking in the forest off the camera" src={Pic23}/>
                <button className="share">
                    <img alt="share" src={ShareIcon}/>
                </button>
                <a className="anchor" href="#">
                    <img alt="anchor" src={AnchorIcon}/> 
                </a>
            </div>
            <div className="underlined margin-bottom"> Fashion </div>
            <h1 className="big-title margin-bottom">
                My Eating Disorder Gave Me a Heart Attack at 17
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

export default ElementThird2