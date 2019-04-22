import React from 'react';
import LinkedList from './LinkedList';
import NodeRegister from './NodeRegister';
import NodeInfo from './NodeInfo';
import './ListComp.css';

class ListComp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			createNode: false,
			nodeSubject: '',
			nodeAmount: '',
			linkedList: new LinkedList()
		}
	}

	handleClick = (e) => {
		let n = e.target.id
		switch(n) {
			case 'createNode':
				this.setState({createNode: true})
			break;
			
			case 'clean':
				this.setState({createNode: false})
			break;
			
			case 'add':
				const temp1 = this.state.linkedList
				temp1.insertNode(this.state.nodeSubject, this.state.nodeAmount)
				this.setState({linkedList:  temp1, createNode: false})
			break;
			
			case 'first':
				const temp2 = this.state.linkedList
				temp2.firstNode()
				this.setState({linkedList: temp2})
			break;
			
			case 'last':
				const temp3 = this.state.linkedList
				temp3.lastNode()
				this.setState({linkedList: temp3})
			break;
		
			case 'next':
				const temp4 = this.state.linkedList
				temp4.nextNode()
				this.setState({linkedList: temp4})
			break;
		
			case 'previous':
				const temp5 = this.state.linkedList
				temp5.previousNode()
				this.setState({linkedList: temp5})
			break;
		
			case 'delete':
				const temp6 = this.state.linkedList
				temp6.deleteNode()
				this.setState({linkedList: temp6})
			break;
			default:
		}
	}

	handleChange = (event) => {
		let {id, value} = event.target
		this.setState({[id]: value})
	}

	render() {
		return (
			<div className='Comp'>
				<button className='listBtn' id='createNode' onClick={this.handleClick}>Insert Node</button>
					{this.state.createNode === true &&
						<NodeRegister
							handleClick = {this.handleClick}
							handleChange = {this.handleChange} />}
					
					{this.state.linkedList.firstNode != null &&
						<NodeInfo
							linkedList = {this.state.linkedList}
							handleClick = {this.handleClick} />}
			</div>
		)
	}
}

export default ListComp;