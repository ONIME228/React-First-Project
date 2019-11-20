import React from '../../../node_modules/react';
import './ElementThird2.css';


function ElementThird2(){
    return(
        <article className="element-second-3">
            <div className="relative margin-bottom">
                <img alt="Man walking in the forest off the camera" src=""/>
                <button className="share">
                    <img alt="share" src=""/>
                </button>
                <a className="anchor" href="#">
                    <img alt="anchor" src=""/> 
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