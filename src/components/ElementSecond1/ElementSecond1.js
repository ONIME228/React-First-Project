import React from '../../../node_modules/react';
import './ElementSecond1.css';


function ElementSecond1(){
    return(
        <article className="element-first-2">
            <div className="relative margin-bottom">
                <img alt="Two women facing each other" src=""/>
                <button className="share">
                    <img alt="share" src=""/>
                </button>
                <a className="anchor" href="#"> 
                    <img alt="anchor" src=""/> 
                </a>
            </div>
            <div className="underlined margin-bottom"> Audio </div>
            <h1 className="big-title margin-bottom">
                Hugo-theme : If you some - one let them go      
            </h1>
            <p className="description margin-bottom"> There are many variations of passages of Lorem Ipsum 
                    available, but the majority have... </p>
            <div className="small margin-bottom"> Dec 09<span className="grey"> / 2015 </span></div>
        </article> 
    );
}


export default ElementSecond1;