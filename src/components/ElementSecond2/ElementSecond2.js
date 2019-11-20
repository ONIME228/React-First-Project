import React from '../../../node_modules/react';
import './ElementSecond2.css';



function ElementSecond2(){
    return(
        <article className="element-second-2">
            <div className="relative margin-bottom">
                <img alt="Black and White painting of foxes"  src=""/>
                <button className="share">
                    <img src=""/>
                </button>
                <a className="anchor" href="#">
                    <img src=""/> 
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