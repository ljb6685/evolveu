import React from 'react';

class Lifo extends React.Component {
	render(props) {
		console.log('Stack', this.props.stack.data)
		const stack = this.props.stack.data.map((card, index) => 
			<div className='myCard' key={card+'-'+index}>
				<p>Data {card}</p>
			</div>
			)
		return (
			<div>{stack}</div>
		)
	}
}

export default Lifo;