import React from 'react'

class NodeRegister extends React.Component {
	render() {
		return ( 
			<div>
				<div onClick={this.props.handleClick} id='clean' />
				<div className='cityForm'>
					<input type='text' id='nodeSubject' className='ndInput' placeholder='Subject' onChange={this.props.handleChange} />
					<input type='number' id='nodeAmount' className='ndInput' placeholder='Amount' onChange={this.props.handleChange} />
					<div className='popupBtn'>				
						<button id='add' className='ndBtn' onClick={this.props.handleClick}>Insert</button>
					</div>
				</div>
			</div>
		)
	}
}

export default NodeRegister;