import React from 'react'

class CityInfo extends React.Component {
	render() {
		const CityInfo = this.props.community.cityArray.map((city, index) => 
			<div className='cityCard' key={city.name+'-'+index}>
				<div>
					<div className='updated'>
						<p className='aaa'>City Name:</p>
						<p className='bbb'>{city.name}</p>
						<p className='aaa'>Coordinate:</p>
						<p className='bbb'>{city.latitude}°, {city.longitude}°</p></div>
					<div className='updated'>
						<p className='aaa'>Population:</p>
						<p className='bbb'>{city.population}</p></div>
					<div className='updated'>
						<p className='aaa'>Settlement Type:</p> 
						<p className='bbb'>{this.props.community.cityArray[index].howBig()}</p></div>
					<div className='updated'>
						<p className='aaa'>Hempishere:</p>
						<p className='bbb'>{this.props.community.whichSphere(index)}</p></div>
					<div className='updated'>
						<input className='popInput' id='editAmount' placeholder='People Amount' onChange={this.props.handleChange} type='number'></input>
						<button className='btnPop' id='addPop' onClick={this.props.handleClick}>Moved In</button>
						<button className='btnPop' id='subPop' onClick={this.props.handleClick}>Moved Out</button>
					</div>
				</div>
			</div>
		)

		this.props.community.getMostNorthern()
		const mostNorth = this.props.community.mostNorth

		this.props.community.getMostSouthern()
		const mostSouth = this.props.community.mostSouth

		this.props.community.getPopulation()
		const totalPop = this.props.community.totalPopulation

		return (
			<div className='citySummary'>
				<div>{CityInfo}</div>
				<div className='cityHistory'>
					<p className='statusTitle'>Most Northern City:</p>
					 <p className='statusResult'>{mostNorth.name}</p>
					<p className='statusTitle'>Most Southern City: </p>
					<p className='statusResult'>{mostSouth.name}</p>
					<p className='statusTitle'>Total Population: </p>
					<p className='statusResult'>{totalPop}</p>
				</div>
			</div>
		)
	}
}

export default CityInfo;