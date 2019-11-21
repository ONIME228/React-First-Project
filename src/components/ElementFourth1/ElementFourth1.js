import React from '../../../node_modules/react';
import './ElementFourth1.css';


function ElementFourth1() {
    return(
        <article className="element-first-4">
            <div className="relative margin-bottom">
                <img alt="Two women in the downtown" src=""/>
                <button className="share">
                    <img alt="share" src=""/>
                </button>
                <a className="anchor" href="#"> 
                    <img alt="anchor" src=""/> 
                </a>
            </div>
            <div className="underlined margin-bottom"> Beauty </div>
            <h1 className="big-title margin-bottom"> 
                Is Blue Eye Shadow Paris's Newest Street Style Star? 
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

export default ElementFourth1;