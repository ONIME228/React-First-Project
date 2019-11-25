import React from 'react';
import './SecondRightArticleBlock.css';
import NewsletterForm from '../NewsletterForm/NewsletterForm';

function SecondRightArticleBlock(){
    return(
        <article className="element-third-2">
            <div className="newsletter">Subscribe to my Newsletter </div>
            <NewsletterForm/>
        </article>
    );
}

export default SecondRightArticleBlock;