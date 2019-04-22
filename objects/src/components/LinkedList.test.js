import LinkedList from './LinkedList'

const linkedListTest = new LinkedList ()

test('Test the LinkedList functions', () => {

	linkedListTest.insertNode('banana', 20)
	expect(linkedListTest.startNode.subject).toBe('banana')
	expect(linkedListTest.currentNode.subject).toBe('banana')
	expect(linkedListTest.startNode.forwardNode).toBe(null)
	console.log('1st Node -', linkedListTest.currentNode.subject)
	
	linkedListTest.insertNode('apple', 30)
	expect(linkedListTest.startNode.forwardNode.subject).toBe('apple')
	expect(linkedListTest.currentNode.subject).toBe('apple')
	console.log('2nd Node -', linkedListTest.currentNode.subject)

	linkedListTest.insertNode('tomato', 40)
	expect(linkedListTest.startNode.forwardNode.forwardNode.subject).toBe('tomato')
	expect(linkedListTest.currentNode.subject).toBe('tomato')
	console.log('3rd Node -', linkedListTest.currentNode.subject)
	
	linkedListTest.firstNode()
	expect(linkedListTest.currentNode.subject).toBe('banana')
	
	linkedListTest.nextNode()
	expect(linkedListTest.currentNode.subject).toBe('apple')

	linkedListTest.lastNode()
	expect(linkedListTest.currentNode.subject).toBe('tomato')

	linkedListTest.previousNode()
	expect(linkedListTest.currentNode.subject).toBe('apple')

	linkedListTest.deleteNode()
	expect(linkedListTest.currentNode.subject).toBe('banana')
	console.log('current 1st Node -', linkedListTest.currentNode.subject)
	
	linkedListTest.nextNode()
	expect(linkedListTest.currentNode.subject).toBe('tomato')
	console.log('current 2nd Node -', linkedListTest.currentNode.subject)
})