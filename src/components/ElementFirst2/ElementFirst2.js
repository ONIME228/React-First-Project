import React from '../../../node_modules/react';
import './ElementFirst2.css';
import Pic21 from '../../image/photo-2-1.png';
import ShareIcon from '../../image/share.png';
import AnchorIcon from '../../image/comment.png';



function ElementFirst2(){
    return(
        <article className="element-second-1">
            <div className="relative margin-bottom">
                <img alt="Blonde staring at the wall under the tree"  src={Pic21}/>
                <button className="share">
                    <img alt="share" src={ShareIcon}/>
                </button>
                <a className="anchor" href="#">
                    <img alt="anchor" src={AnchorIcon}/> 
                </a>
            </div>
            <div className="underlined margin-bottom"> My life </div>
            <h1 className="big-title margin-bottom">
                Quiz: What Kind of Gift Giver Are You?
            </h1>
            <p className="description margin-bottom"> 
                There are many variations of passages of Lorem Ipsum 
                available, but the majority have suffered alteration in some 
                form, by injected humour, or randomised words...
            </p>
            <div className="small margin-bottom"> Dec 09 <span className="grey">/ 2015</span></div>
        </article>
    );
}

export default ElementFirst2;