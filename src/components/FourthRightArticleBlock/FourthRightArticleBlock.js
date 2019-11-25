import React from 'react';
import './FourthRightArticleBlock.css';
import Square1 from '../../image/Photo 3-inst-1.png';
import Square2 from '../../image/Photo-3-inst-2.png';
import Square3 from '../../image/Photo-3-inst-3.png';
import Square4 from '../../image/Photo-3-inst-4.png';

function FourthRightArticleBlock(){
    return(
        <div>
            <h1 className="big-underlined"> Instagram </h1>
            <article className="element-third-4" >
                <div className="instagram-column">
                    <img alt="Young woman facing us sitting on the floor" src={Square1}/>
                    <img alt="Hands drawing each other" src={Square2}/>
                </div>
                <div className="instagram-column">
                    <img alt="Girl standing in front of You" src={Square3}/>
                    <img alt="Black and White photo of man and woman" src={Square4}/>
                </div>
            </article>
        </div>
    );
} 

export default FourthRightArticleBlock;