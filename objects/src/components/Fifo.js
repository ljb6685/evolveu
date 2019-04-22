import React from 'react';

class Fifo extends React.Component {
	render(props) {
		console.log('Queue', this.props.queue.data)		
		const queue = this.props.queue.data.map((card, index) => 
			<div className='myCard' key={card+'-'+index}>
				<p>Data {card}</p>
			</div>
    		)
	    return (
			<div>{queue}</div>
		)
	}
}

export default Fifo;