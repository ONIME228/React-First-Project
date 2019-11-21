import React from '../../../node_modules/react';
import './ElementThird3.css';

function ElementThird3(){
    return(
        <article className="element-third-3">
            <h1 className="big-underlined"> Latest posts </h1>
            <div className="aside-box">
                <div className="underlined-aside margin-bottom">Beauty</div>
            </div>
            <div className="posts-aside margin-bottom"> The Beauty Evolution of Gigi Hadid, from
            Child Model of Fashion It Girl</div>
            <div className="small space">Nov 25 <span className="grey">/ 2015</span></div>
            <div className="aside-box">
                <div className="underlined-aside margin-bottom">Fashion</div>
            </div>    
            <div className="posts-aside margin-bottom"> Which Throwback Girl Group are You and Your Friends? </div>
            <div className="small space">Nov 25<span className="grey"> / 2015</span></div>
            <div className="aside-box">
                <div className="underlined-aside margin-bottom">My life</div>
            </div>
            <div className="posts-aside margin-bottom">Your Horoscope For This Week</div>
            <div className="small">Nov 25 <span className="grey">/ 2015 </span></div> 
        </article>
    );
}

export default ElementThird3;