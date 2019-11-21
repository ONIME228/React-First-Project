import React from '../../../node_modules/react';
import './NewsletterForm.css';


function NewsletterForm(){
    return(
        <form method="get">
            <input className="news-area" type="email" placeholder="Your e-mail..."/>
            <button className="news-submit-button">
                SUBMIT
            </button>
        </form>
    );
}

export default NewsletterForm;