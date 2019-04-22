import Node from './Node.js';

test ('Test the Node functions', () => {
	const nodeTest = new Node ('banana', 20)	
	// constructor
	expect(nodeTest.forwardNode).toBe(null)
	expect(nodeTest.subject).toBe('banana')
	expect(nodeTest.amount).toBe(20)	
	// show
	expect(nodeTest.show()).toBe('banana, 20')
	console.log('subject -',nodeTest.subject)
	console.log('amount -',nodeTest.amount)	
})