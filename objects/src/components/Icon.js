import React from 'react';
import MathComp from './MathComp';
import AccountComp from './AccountComp.js';
import CityComp from './CityComp.js';
import ListComp from './ListComp.js';
import QueueComp from './QueueComp.js';

class Icon extends React.Component {
    constructor() {
        super()
        this.clickIcon = 'account'
        this.state = {myState: this.clickIcon}
    }
    
    handleClick = (e) => {
        this.clickIcon = e.target.alt
        this.setState({myState: this.clickIcon})
    }  
        
    render() {           
        let myPage = <div />
        if (this.clickIcon === 'home') {
            myPage = null;
        }
        else if (this.clickIcon === 'calculator') {
            myPage = <MathComp />
        }     
        else if (this.clickIcon === 'bank') {
            myPage = <AccountComp />
        }
        else if (this.clickIcon === 'city') {
           myPage = <CityComp />
        }
        else if (this.clickIcon === 'list') {
            myPage = <ListComp />
        }
        else if (this.clickIcon === 'queue') {
            myPage = <QueueComp />
        }
        
        return (
            <div>
                <div className='iconheader'>
                    <img alt='home' className='logo' onClick={this.handleClick} 
                    src='https://www.iconinteractive.com/wp-content/uploads/2015/12/Social_Icon.gif' />
                    <img alt='calculator' className='logo' onClick={this.handleClick}
                    src='https://www.iconinteractive.com/wp-content/uploads/2015/12/Web_Icon.gif' />
                    <img alt='bank' className='logo' onClick={this.handleClick}
                    src='https://www.iconinteractive.com/wp-content/uploads/2015/12/Exp_Icon.gif' />
                    <img alt='city' className='logo' onClick={this.handleClick}
                    src='https://www.iconinteractive.com/wp-content/uploads/2015/12/AA_Icon.gif' />
                    <img alt='list' className='logo' onClick={this.handleClick}
                    src='https://www.iconinteractive.com/wp-content/uploads/2015/12/Mobile_Icon.gif' />
                    <img alt='queue' className='logo' onClick={this.handleClick}
                    src='https://www.iconinteractive.com/wp-content/uploads/2015/12/Creative_Icon.gif' />
                </div>    
                <div>
                    {myPage}
                </div>
            </div> 
        );
    }
}

export default Icon;