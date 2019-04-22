import React from 'react';
import City from './City.js';
import Community from './Community.js';
import CityRegister from './CityRegister.js';
import CityInfo from './CityInfo.js';
import './CityComp.css';

class CityComp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			createMyCity: false,
			updateMyCity: false,
			cityName: '',
			cityLat: '',
			cityLon: '',
			cityPop: '',
			community: new Community(),
			updatePop: 0,
			updateAmount: 0
		}
	}
	
	handleClick = (e) => {	
		if (e.target.id === 'createCity') {
			this.setState({createMyCity: true})
		}		
		if (e.target.id === 'addPop') {
			this.state.community.cityArray[this.state.updatePop].movedIn(this.state.updateAmount)
			this.setState({updateAmount: 0})
		}	
		if (e.target.id === 'subPop') {
			this.state.community.cityArray[this.state.updatePop].movedOut(this.state.updateAmount)
			this.setState({updateAmount: 0})
		}
	}

	handleClean = (e) => {
	this.setState({updateMyCity: false, createMyCity: false})
	}	
	
	handleName = (e) => {
	this.setState({cityName: e.target.value})
	}

	handleLat = (e) => {
	this.setState({cityLat: e.target.value})
	}
	
	handleLon = (e) => {
	this.setState({cityLon: e.target.value})
	}
	
	handlePop = (e) => {
	this.setState({cityPop: Number(e.target.value)})
	}

	handleCreate = 	(e) => {
		if (this.state.cityName.length === 0) {
			return (alert('Please input city name !'))
		}
		else if (this.state.cityLat < -90 || this.state.cityLat > 90 || this.state.cityLat.length === 0) {
			return (alert('Please input valid latitude !'))
		}
		else if (this.state.cityLon < -180 || this.state.cityLon > 180 || this.state.cityLon.length === 0) {
			return(alert('Please input valid longitude !'))
		}
		else {
			const tempCommunity = this.state.community
			const tempCity = new City (
			this.state.cityName, 
			this.state.cityLat, 
			this.state.cityLon, 
			this.state.cityPop
			)
			tempCommunity.add(tempCity)
			this.setState({
				community: tempCommunity,
				createMyCity: false,
				cityName: '',
				cityLat: '',
				cityLon: '',
				cityPop: '',
			})
		}
	}

	handleChange = (e) => {	
		this.setState({updateAmount: Number(e.target.value)})
	}

	render() {
		let newCity = <div />
	
	if (this.state.createMyCity === true) {
		newCity = <CityRegister
		ctClean = {this.handleClean}
		ctName = {this.handleName}
		ctLat = {this.handleLat}
		ctLon = {this.handleLon}
		ctPop = {this.handlePop}
		ctCreate = {this.handleCreate} />
	}
		
	return (
		<div className='Comp'>
		<button id='createCity' onClick={this.handleClick}>Create New City</button>
		{newCity}
		{this.state.community.cityArray.length > 0 &&
		<CityInfo
			community ={this.state.community}
			handleClick = {this.handleClick}
			handleChange = {this.handleChange} />}
		</div>
	)}
}

export default CityComp;