import React from '../../../node_modules/react';
import './ElementSecond3.css';
import NewsletterForm from '../NewsletterForm/NewsletterForm';

function ElementSecond3(){
    return(
        <article className="element-third-2">
            <div className="newsletter">Subscribe to my Newsletter </div>
            <NewsletterForm/>
        </article>
    );
}

export default ElementSecond3;