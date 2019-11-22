import React from '../../../node_modules/react';
import './InstaSheets.css';
import InstSheet1 from '../../image/insta-sheet-1.png';
import InstSheet2 from '../../image/insta-sheet-2.png';
import InstSheet3 from '../../image/insta-sheet-3.png';
import InstSheet4 from '../../image/insta-sheet-4.png';
import InstSheet5 from '../../image/insta-sheet-5.png';
import InstSheet6 from '../../image/insta-sheet-6.png';
import InstSheet7 from '../../image/insta-sheet-7.png';
import InstSheet8 from '../../image/insta-sheet-8.png';


function InstaSheets(){
    return(
        <div>
            <div className="instagram"> Instagram </div>
            <div className="insta-sheet">
                <div className="insta-bar-1">
                    <img alt="Legs" src={InstSheet1}/>
                    <img alt="Girl in front of the sea" src={InstSheet2}/>
                </div>
                <div className="insta-bar-2">
                    <img alt="Apetizer on the table" src={InstSheet3}/>
                </div>
                <div className="insta-bar-3">
                    <img alt="Shaving the Pink color" src={InstSheet4}/>
                    <div>
                    <img alt="View of the island's coast" src={InstSheet5}/>
                    <img alt="Nape of the girl" src={InstSheet6}/>
                    </div>
                </div>
                <div className="insta-bar-4">
                    <img alt="Scarf-girl" src={InstSheet7}/>
                    <img alt="Girl standing on the fence in the field" src={InstSheet8}/>
                </div>
            </div>
        </div>
    );
}

export default InstaSheets;