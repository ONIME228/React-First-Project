import React from 'react';
import './MainPageCenterBox.css';
import ArticleBlock from '../ArticleBlock/ArticleBlock';
import FirstImage from '../../image/photo-2-1.png';
import SecondImage from '../../image/Photo-2-2.png';
import ThirdImage from '../../image/Photo-2-3.png';
import FourthImage from '../../image/Photo-2-4.png';


const date = { 
    day:"09",
    month:"Dec",
    year:"2015",
}

function MainPageCenterBox(){
    const StaticData = [
        {
            image: {FirstImage},
            alt: "Blonde staring at the wall under the tree",
            sectionName: "My life",
            title: "Quiz: What Kind of Gift Giver Are You?",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words...",
            date: {date},
        },
        {
            image: {SecondImage},
            alt: "Black and White painting of foxes",
            sectionName: "Fashion",
            title: "The Best Beauty Looks: Week of October 13,2015",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words...",
            date: {date},
        },
        {
            image: {ThirdImage},
            alt: "Man walking in the forest off the camera",
            sectionName: "Fashion",
            title: "My Eating Disorder Gave Me a Heart Attack at 17",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words...",
            date: {date},
        },
        {
            image: {FourthImage},
            alt: "Caligraphic Q-letter",
            sectionName: "Make up",
            title: "Paris Fashion Week Highlights: Vogue's Anna Wintour on All the Top Shows",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration...",
            date: {date},
        },
    ];
    renderArticleBlocks = () => {
        return StaticData.map( item => {
            <ArticleBlock
            image = {item.image}
            alt = {item.alt}
            sectionName = {item.sectionName}
            title = {item.title}
            description = {item.description}
            date = {item.date}
            />
            }
        );
    }

    return(
        <div className="second-column">
            {this.renderArticleBlocks()}
        </div>
    );
}

export default MainPageCenterBox;