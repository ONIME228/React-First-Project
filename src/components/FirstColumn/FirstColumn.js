import React from '../../../node_modules/react';
import './FirstColumn.css';
import ElementFirst1 from '../ElementFirst1/ElementFirst1';
import ElementSecond1 from '../ElementSecond1/ElementSecond1';
import ElementThird1 from '../ElementThird1/ElementThird1';
import ElementFourth1 from '../ElementFourth1/ElementFourth1';
import ElementFifth1 from '../ElementFifth1/ElementFifth1';


function FirstColumn(){
    return(
        <div className="first-column">
            <ElementFirst1/>
            <ElementSecond1/>
            <ElementThird1/>
            <ElementFourth1/>
            <ElementFifth1/>
        </div>
    );
}

export default FirstColumn;