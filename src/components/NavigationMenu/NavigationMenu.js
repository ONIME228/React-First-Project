import React from 'react';
import './NavigationMenu.css';
import { thisTypeAnnotation } from '@babel/types';

class NavigationMenu {
    constructor( props ) {
        this.state = {
            isNavOpen: false,
        };
    }

    handleNavClick() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    
    render() {
        const { isNavOpen } = this.state;
        
        return (
            <div>
                <button/>
                {isNavOpen && (
                    <nav className="menu">
                        <div> <a href=""> HOME      </a> </div>            
                        <div> <a href=""> POSTTYPES </a> </div>
                        <div> <a href=""> FEAUTURES </a> </div>
                        <div> <a href=""> PAGES     </a> </div>
                        <div> <a href=""> CATEGORIES</a> </div>
                        <div> <a href=""> CONTACT   </a> </div>
                    </nav>
                )}
            </div>
        );
    }
}    
      
      export default NavigationMenu;




