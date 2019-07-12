import City from './City.js';

test('Test the City functions', () => {
    const cityTest = new City('Seoul', 37, 127, 10000000)
    // constructor
    expect(cityTest.name).toBe('Seoul')
	expect(cityTest.latitude).toBe(37);
	expect(cityTest.longitude).toBe(127);
	expect(cityTest.population).toBe(10000000);
    // show
    expect(cityTest.show()).toBe('Seoul, 37, 127, 10000000')
	// movedIn	
    expect(cityTest.movedIn(1000000)).toBe(11000000)
    console.log('movedIn test:', cityTest.population)
    // movedOut
    expect(cityTest.movedOut(2000000)).toBe(9000000)
    console.log('movedOut test:', cityTest.population)
    // howBig
    expect(cityTest.howBig()).toBe('City')
    cityTest.population = 99999;
    expect(cityTest.howBig()).toBe('Large Town')
    cityTest.population = 19999;
    expect(cityTest.howBig()).toBe('Town')
    cityTest.population = 999;
    expect(cityTest.howBig()).toBe('Village')
    cityTest.population = 99;
    expect(cityTest.howBig()).toBe('Hamlet')
})