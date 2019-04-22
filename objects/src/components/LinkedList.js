import Node from './Node.js';

class LinkedList {
	constructor() {
		this.startNode = null
		this.currentNode = ''
	}

	insertNode = (subject, amount) => {
		if (this.startNode === null) {
			let newNode = new Node (subject, amount)
			newNode.forwardNode = null
			this.startNode = this.currentNode = newNode
			return this.startNode
		}
		else {
			let newNode = new Node (subject, amount)
			newNode.forwardNode = this.currentNode.forwardNode
			this.currentNode.forwardNode = this.currentNode = newNode
			return newNode
		}
	}

	firstNode = () => {
		let myNode = this.startNode
		return this.currentNode = myNode
	}

	nextNode = () => {
		if (this.currentNode.forwardNode === null) {
			return this.currentNode
		}
		return this.currentNode = this.currentNode.forwardNode
	}

	lastNode = () => {
		let myNode = this.startNode
		while (myNode) {
			if (myNode.forwardNode === null) {
				return this.currentNode = myNode
			}
			myNode = myNode.forwardNode
		}
	}

	previousNode = () => {
		let myNode = this.startNode
		if (myNode === this.currentNode) {
			return myNode
		}
		while (myNode) {
			if (this.currentNode === myNode.forwardNode) {
				return this.currentNode = myNode
			}
			myNode = myNode.forwardNode
		}
	}

	deleteNode = () => {
		if (this.startNode.forwardNode === null){
			return this.startNode = null
		}
		else if (this.startNode === this.currentNode) {
			this.startNode = this.startNode.forwardNode
			return this.currentNode = this.startNode
		}
		else {
			let preNode = this.previousNode()
			preNode.forwardNode = this.currentNode.forwardNode.forwardNode
			this.currentNode = preNode
			return this.currentNode
		}
	}
}

export default LinkedList;