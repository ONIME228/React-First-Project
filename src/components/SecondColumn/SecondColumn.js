import React from '../../../node_modules/react';
import './SecondColumn.css';
import ElementFirst2 from '../ElementFirst2/ElementFirst2';
import ElementSecond2 from '../ElementSecond2/ElementSecond2';

function SecondColumn(){
    return(
        <div className="second-column">
            <ElementFirst2/>
            <ElementSecond2/>
        </div>
    );
}

export default SecondColumn;