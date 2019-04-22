class Community {
	constructor() {
		this.cityArray = []
	}

	add (aaa) {
		this.cityArray.push(aaa)
	}

	whichSphere (bbb) {
		if (this.cityArray[bbb].latitude > 0) {
			return 'North'
        }
        else {
			return 'South'
		}
	}

	getMostNorthern () {
        this.mostNorth = this.cityArray.reduce((preVal, curVal) => 
        (preVal.latitude > curVal.latitude) ? preVal : curVal)
	}

	getMostSouthern () {
        this.mostSouth = this.cityArray.reduce((preVal, curVal) =>
        (preVal.latitude < curVal.latitude) ? preVal : curVal)
	} 

	getPopulation () {
		this.totalPopulation = this.cityArray.reduce((preVal, curVal) => preVal + curVal.population, 0)
	}
}

export default Community