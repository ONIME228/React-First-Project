import React from 'react';
import './MainPageRightBox.css';
import FirstRightArticleBlock from '../FirstRightArticleBlock/FirstRightArticleBlock';
import SecondRightArticleBlock from '../SecondRightArticleBlock/SecondRightArticleBlock';
import ThirdRightArticleBlock from '../ThirdRightArticleBlock/ThirdRightArticleBlock';
import FourthRightArticleBlock from '../FourthRightArticleBlock/FourthRightArticleBlock';
import FifthRightArticleBlock from '../FifthRightArticleBlock/FifthRightArticleBlock';
import SixthRightArticleBlock from '../SixthRightArticleBlock/SixthRightArticleBlock';
import SeventhRightArticleBlock from '../SeventhRightArticleBlock/SeventhRightArticleBlock';


function MainPageRightBox(){
    return(
        <div className="third-column">
            <FirstRightArticleBlock/>
            <SecondRightArticleBlock/>
            <ThirdRightArticleBlock/>
            <FourthRightArticleBlock/>
            <FifthRightArticleBlock/>
            <SixthRightArticleBlock/>
            <SeventhRightArticleBlock/>
        </div>
    );
}

export default MainPageRightBox;