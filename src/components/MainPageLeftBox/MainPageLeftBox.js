import React from 'react';
import './MainPageLeftBox.css';
import ArticleBlock from '../ArticleBlock/ArticleBlock';
import FirstImage from '../../image/Photo-1-1.png';
import SecondImage from '../../image/Photo-1-2.png';
import ThirdImage from '../../image/Photo-1-3.png';
import FourthImage from '../../image/Photo-1-4.png';
import FifthImage from '../../image/Photo-1-5.png';
import { Decipher } from 'crypto';




const date = { 
    day:"09",
    month:"Dec",
    year:"2015",
}

function MainPageLeftBox(){
    const StaticData = [
        {
            image:{FirstImage},
            alt:"X-symbol",
            sectionName:"Fashion",
            title:"The Best Beauty Looks: Week of October 13,2015",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words...",
            date:{date},
        },
        {
            image: {SecondImage},
            alt: "Two women facing each other",
            sectionName: "Audio",
            title: "Hugo-theme : If you some - one let them go",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have...",
            date: {date},
        },
        {
            image: {ThirdImage},
            alt: "Three men walking up the street",
            sectionName: "Make Up",
            title: "Yes, 'Plus Privilege' Exists. Here's What It Is ",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words...",
            date: {date},
        },
        {
            image: {FourthImage},
            alt: "Two women in the downtown",
            sectionName: "Beauty",
            title: "Is Blue Eye Shadow Paris's Newest Street Style Star?",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words...",
            date: {date},
        },
        {
            image: {FifthImage},
            alt: "Two young ladies placing their heads on right shoulder of each other calmly",
            sectionName: "Make Up",
            title: "Lili Summer | Numéro N˚ɪ68 November 2015",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words...",
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
        <div className="first-column">
            {this.renderArticleBlocks()}
        </div>
    );
}

export default MainPageLeftBox;