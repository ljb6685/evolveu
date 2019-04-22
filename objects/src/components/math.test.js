import math from "./math";

test('Test the math functions', () => {
	console.log('Hello World');
	expect(math.sum(1,2)).toBe(3);
	expect(math.subtract(2,1)).toBe(1);
	expect(math.multiply(2,2)).toBe(4);
	expect(math.divide(6,2)).toBe(3);
});