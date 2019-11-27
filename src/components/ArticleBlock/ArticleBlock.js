import React from '../../../node_modules/react';
import './ArticleBlock.css';
import ShareIcon from '../../image/share.png';
import AnchorIcon from '../../image/comment.png'; 


function ArticleBlock(props) {
    return(
        <article className="article-block">
            <div className="relative margin-bottom">
                <img alt= {props.alt} src={props.image}  />
                <button className="share">
                    <img alt="share" src={ShareIcon}/>
                </button>
                <a className="anchor" href="#">
                    <img alt="anchor" src= {AnchorIcon} /> 
                </a>
            </div>
            <div className="underlined margin-bottom">
                {props.sectionName}
            </div>
            <h1 className="big-title margin-bottom">
                {props.title}
            </h1>
            <p className="description margin-bottom"> 
                {props.description}
            </p>
            <div className="small"> {props.date.day} {props.date.month} <span className="grey"> / {props.date.year} </span></div>
        </article>
    );
}

export default ArticleBlock;