import React from 'react';
import Data from './Data';
import Fifo from './Fifo';
import Lifo from './Lifo';
import './QueueComp.css';

class QueueComp extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
			fifoQueue: false,
			lifoStack: false,
            fifoValue: '',
            lifoValue: '',
            fifoCounter: 0,
            lifoCounter: 0,
            queue: new Data(),
			stack: new Data()
		}
	}

	handleClick = (e) => {
        let n=e.target.id
        switch(n) {
            case 'fifoIn':
                let counterFifo = this.state.fifoCounter
			    counterFifo++
			    const queueIn = this.state.queue
			    queueIn.add(counterFifo)
			    this.setState({
				    fifoQueue: false,
				    fifoValue: '',
                    fifoCounter: counterFifo,
                    queue: queueIn
			    })
            break;

            case 'fifoOut':
                const queueOut = this.state.queue
			    queueOut.fifo()
			    this.setState({queue: queueOut})
            break;

            case 'lifoIn':
                let counterLifo = this.state.lifoCounter
			    counterLifo++
			    const stackIn = this.state.stack
			    stackIn.add(counterLifo)
			    this.setState({
				    lifoStack: false,
				    lifoValue: '',
                    lifoCounter: counterLifo,
                    stack: stackIn
                })
            break;

            case 'lifoOut':
                const stackOut = this.state.stack
			    stackOut.lifo()
			    this.setState({stack: stackOut})
            break;
            default:
        }
    }

	handleChange = (event) => {
		const {name, value} = event.target
		this.setState({[name]: value})
	}

	render() {
		return (
			<div className='qComp'>
				<div className='queueContainer'>
					<h1 className='aaa'>QUEUE - FIFO</h1>
					<button className='btn3' id='fifoIn' onClick={this.handleClick}>In</button>
					<button className='btn3' id='fifoOut' onClick={this.handleClick}>Out</button>
					{this.state.queue.data.length > 0 && 
						<Fifo queue = {this.state.queue} />}
				</div>
				<div className='queueContainer'>
					<h1 className='aaa'>STACK - LIFO</h1>
					<button className='btn3'id='lifoIn' onClick={this.handleClick}>In</button>
					<button className='btn3' id='lifoOut' onClick={this.handleClick}>Out</button>
					{this.state.stack.data.length > 0 && 
						<Lifo stack = {this.state.stack} />}
				</div>
			</div>
		)
	}
}

export default QueueComp;