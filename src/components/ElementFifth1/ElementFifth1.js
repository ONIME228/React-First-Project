import React from '../../../node_modules/react';
import './ElementFifth1.css';


function ElementFifth1() {
    return(
        <article className="element-first-5">
            <div className="relative margin-bottom">
                <img alt="Two young ladies placing their heads on right shoulder of each other calmly" 
                     src=""/>
                <button className="share">
                    <img alt="share" src=""/>
                </button>
                <a className="anchor" href="#"> 
                    <img alt="anchor" src=""/> 
                </a>
            </div>
            <div className="underlined margin-bottom"> Make up </div>
            <h1 className="big-title margin-bottom">
                 Lili Summer | Numéro N˚ɪ68 November 2015 
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

export default ElementFifth1;