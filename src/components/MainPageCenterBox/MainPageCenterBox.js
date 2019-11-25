import React from 'react';
import './MainPageCenterBox.css';
import ElementFirst2 from '../ElementFirst2/ElementFirst2';
import ElementSecond2 from '../ElementSecond2/ElementSecond2';
import ElementThird2 from '../ElementThird2/ElementThird2';
import ElementFourth2 from '../ElementFourth2/ElementFourth2';
import ArticleBlock from '../ArticleBlock/ArticleBlock';
import FirstImage from '../../image/photo-2-1.png';
import SecondImage from '../../image/Photo-2-2.png';
import ThirdImage from '../../image/Photo-2-3.png';
import FourthImage from '../../image/Photo-2-4.png';



function MainPageCenterBox(){
    return(
        <div className="second-column">
            <ArticleBlock
                image={FirstImage}
                alt="Blonde staring at the wall under the tree"
                section="My life"
                title="Quiz: What Kind of Gift Giver Are You?"
                description="There are many variations of passages of Lorem Ipsum 
                available, but the majority have suffered alteration in some 
                form, by injected humour, or randomised words..."
                date="Dec 09"
            />
            <ArticleBlock
                image={SecondImage}
                alt="X-symbol"
                section="Fashion"
                title="The Best Beauty Looks: Week of  
                October 13,2015"
                description="There are many variations of passages of Lorem Ipsum 
                available, but the majority have suffered alteration in some 
                form, by injected humour, or randomised words..."
                date="Dec 09"
            />
            <ArticleBlock
                image={ThirdImage}
                alt="Man walking in the forest off the camera"
                section="Fashion"
                title="My Eating Disorder Gave Me a Heart Attack at 17"
                description="There are many variations of passages of Lorem Ipsum 
                available, but the majority have suffered alteration in some 
                form, by injected humour, or randomised words..."
                date="Dec 09"
            />
            <ArticleBlock
                image={FourthImage}
                alt="Caligraphic Q-letter"
                section="Make up"
                title="Paris Fashion Week Highlights: 
                Vogue's Anna Wintour on All the Top Shows"
                description="There are many variations of passages of Lorem Ipsum 
                available, but the majority have suffered alteration..."
                date="Dec 09"
            />
        </div>
    );
}

export default MainPageCenterBox;