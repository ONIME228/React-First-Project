import React from '../../../node_modules/react';
import './SecondColumn.css';
import ElementFirst2 from '../ElementFirst2/ElementFirst2';
import ElementSecond2 from '../ElementSecond2/ElementSecond2';
import ElementThird2 from '../ElementThird2/ElementThird2';
import ElementFourth2 from '../ElementFourth2/ElementFourth2';

function SecondColumn(){
    return(
        <div className="second-column">
            <ElementFirst2/>
            <ElementSecond2/>
            <ElementThird2/>
            <ElementFourth2/>
        </div>
    );
}

export default SecondColumn;