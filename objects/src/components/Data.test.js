import Data from './Data.js';

test('Test the Data functions', () => {
	const dataTest = new Data()
	// add
	dataTest.add('Banana')
	dataTest.add('Apple')
    dataTest.add('Mango')
    dataTest.add('Tomato')
    dataTest.add('Melon')
    expect(dataTest.data[0]).toBe('Banana')
    expect(dataTest.data[1]).toBe('Apple')
    expect(dataTest.data[2]).toBe('Mango')
    expect(dataTest.data[3]).toBe('Tomato')
    expect(dataTest.data[4]).toBe('Melon')
    console.log('add data -->', dataTest.data)
    // fifo
	dataTest.fifo()
	expect(dataTest.data[0]).toBe('Apple')
	expect(dataTest.data[1]).toBe('Mango')
    expect(dataTest.data[2]).toBe('Tomato')
    expect(dataTest.data[3]).toBe('Melon')
    expect(dataTest.data[4]).toBe()
    console.log('fifo data -->', dataTest.data)
	// lifo
	dataTest.lifo()
	expect(dataTest.data[0]).toBe('Apple')
	expect(dataTest.data[1]).toBe('Mango')
    expect(dataTest.data[2]).toBe('Tomato')
    expect(dataTest.data[3]).toBe()
    expect(dataTest.data[4]).toBe()
    console.log('lifo data -->', dataTest.data)
})