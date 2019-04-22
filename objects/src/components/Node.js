class Node {
	constructor(subject, amount, forwardNode=null) {
		this.forwardNode = forwardNode
		this.subject = subject
		this.amount = amount 
	}

	show = () => {
		return `${this.subject}, ${this.amount}`
	}
}

export default Node;