import React from 'react'

class NodeInfo extends React.Component {
	render() {
		return (
			<div className='nodeCard'>
				<div>
					<h1 className='aaa'>Current Node:</h1>
					<h className='bbb'>{this.props.linkedList.currentNode.subject}</h>
					<h className='bbb'>{this.props.linkedList.currentNode.amount}</h>
				</div>
				<div>
					<button id='first' onClick={this.props.handleClick} className='btn2'>First Node</button>
					<button id='last' onClick={this.props.handleClick} className='btn2'>Last Node</button>
					<button id='previous' onClick={this.props.handleClick} className='btn2'>Previous Node</button>
					<button id='next' onClick={this.props.handleClick} className='btn2'>Next Node</button>
					<button id='delete' onClick={this.props.handleClick} className='btn2'>Delete Node</button>
				</div>
			</div>
		)
	}
}

export default NodeInfo;