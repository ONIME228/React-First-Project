import React from '../../../node_modules/react';
import './ElementFirst2.css';



function ElementFirst2(){
    return(
        <article className="element-second-1">
            <div className="relative margin-bottom">
                <img alt="Blonde staring at the wall under the tree"  src=""/>
                <button className="share">
                    <img alt="share" src=""/>
                </button>
                <a className="anchor" href="#">
                    <img alt="anchor" src=""/> 
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