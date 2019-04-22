class Data {
	constructor() {
		this.data = []
	}

	add = (card) => {
		this.data.push(card)
	}

	fifo = () => {
		this.data.shift()
	}

	lifo = () => {
		this.data.pop()
	}
}

export default Data;