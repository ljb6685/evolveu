import React, { Component } from 'react';
import maths from './math';
import './../App.css'

class MathComp extends Component {
    state={
        num1:'',
        num2:'',
        result: 0,
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    handleClick = (event) => {
        let n = event.target.name
        let a = Number(this.state.num1)
        let b = Number(this.state.num2)
    
        switch(n) {
            case 'add':
                this.setState({result: maths.sum(a,b)})
            break;
            case 'subtract':
                this.setState({result: maths.subtract(a,b)})
            break;
            case 'multiply':
                this.setState({result: maths.multiply(a,b)})
            break;
            case 'divide':
                this.setState({result: maths.divide(a,b)})
            break;
            case 'clear':
                this.setState({num1: '', num2: ''})
            break;
            default:
                console.log("Wrong!")
        }
    }  

    render() {
        return (
            <form className='calculator'>
                <h3>Hello World from MathComp</h3>
                
                <input className='no1' type='number' name='num1'
                value={this.state.num1} onChange={this.handleChange} />
                <input className='no2' type='number' name='num2'
                value={this.state.num2} onChange={this.handleChange} />

                <div className='btn'>
                    <button type='button' className="b grow" name='add' onClick={this.handleClick}>+</button>
                    <button type='button' className="b grow" name='subtract' onClick={this.handleClick}>-</button>
                    <button type='button' className="b grow" name='multiply' onClick={this.handleClick}>*</button>
                    <button type='button' className="b grow" name='divide' onClick={this.handleClick}>/</button>
                    <button type='button' className="b grow" name='clear' onClick={this.handleClick}>C</button>
                </div>                
                <h2>{this.state.result}</h2>
            </form>          
        );
    }
}

export default MathComp;