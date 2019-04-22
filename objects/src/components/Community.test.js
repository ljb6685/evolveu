import City from './City.js'
import Community from './Community.js'

test ('Test the Community functions', () => {
	const comTest = new Community()
	const Seoul = new City('Seoul', 37, 127, 10000000)
	const Wellington = new City('Wellington', -41, 174, 400000)
	// add new city
	comTest.add(Seoul)
    expect(comTest.cityArray[0]).toBe(Seoul)
	console.log('add new city:', comTest.cityArray[0].name)
    comTest.add(Wellington)
    expect(comTest.cityArray[1]).toBe(Wellington)
	console.log('add new city:', comTest.cityArray[1].name)
	// whichSphere
 	expect(comTest.whichSphere(0)).toBe('North')
 	expect(comTest.whichSphere(1)).toBe('South')
 	// getMostNorthern
 	comTest.getMostNorthern()
    expect(comTest.mostNorth.name).toBe('Seoul')
    console.log('Northern City:', comTest.mostNorth.name) 
 	// getMostSouthern
 	comTest.getMostSouthern()
    expect(comTest.mostSouth.name).toBe('Wellington')
    console.log('Southern City:', comTest.mostSouth.name) 
 	// getPopulation
 	comTest.getPopulation()
    expect(comTest.totalPopulation).toBe(10400000)
    console.log('Total Population:', comTest.totalPopulation)
})