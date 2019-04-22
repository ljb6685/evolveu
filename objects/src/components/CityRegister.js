import React from 'react'

class CityRegister extends React.Component {
	render() {
		return (
			<div>
				<div className='cityPopup' onClick={this.props.ctClean} />
				<div className='cityContainer'>
					<input type='text' className='ctInput' placeholder='City Name' onChange={this.props.ctName} />
					<input type='number' className='ctInput' placeholder='Latitude' onChange={this.props.ctLat} />
					<input type='number' className='ctInput' placeholder='Longitude' onChange={this.props.ctLon} />
					<input type='number' className='ctInput' placeholder='Population' onChange={this.props.ctPop} />
					<div><button className='btn2' onClick={this.props.ctCreate}>Create</button></div>
				</div>
			</div>
		)
	}
}

export default CityRegister;