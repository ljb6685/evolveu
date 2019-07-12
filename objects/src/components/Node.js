class Node {
	constructor(subject, amount) {
		this.subject = subject
		this.amount = amount 
		this.backwardNode = null
		this.forwardNode = null
	}

	show = () => {
		return `${this.subject}, ${this.amount}`
	}
}

export default Node;