import React from '../../../node_modules/react';
import './ThirdColumn.css';
import ElementFirst3 from '../ElementFirst3/ElementFirst3';
import ElementSecond3 from '../ElementSecond3/ElementSecond3';
import ElementThird3 from '../ElementThird3/ElementThird3';
import ElementFourth3 from '../ElementFourth3/ElementFourth3';
import ElementFifth3 from '../ElementFifth3/ElementFifth3';
import ElementSixth3 from '../ElementSixth3/ElementSixth3';
import ElementSeventh3 from '../ElementSeventh3/ElementSeventh3';


function ThirdColumn(){
    return(
        <div className="third-column">
            <ElementFirst3/>
            <ElementSecond3/>
            <ElementThird3/>
            <ElementFourth3/>
            <ElementFifth3/>
            <ElementSixth3/>
            <ElementSeventh3/>
        </div>
    );
}

export default ThirdColumn;