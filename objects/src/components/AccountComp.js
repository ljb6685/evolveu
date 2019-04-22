import React from 'react'
import Account from './Account.js'
import AccountRegister from './AccountRegister.js'
import AccountInfo from './AccountInfo.js'
import Accounts from './AccountController.js'
import './AccountComp.css'

class AccountComp extends React.Component {
	constructor(props) {
		super(props)
    this.state = {
	    createAccount: '',
	    selectAccount: '',
	    initialDeposit: '',
	    accountArray: new Accounts(),
	    amountChange: '',
	    id: '',
  	}
	}

	handleClick = (e) => {
    this.setState({createAccount: e.target.id})
  }

	handleSelect = (e) => {
	this.setState({selectAccount: e.target.value})
	}

	depositAmount = (e) => {
	this.setState({initialDeposit: Number(e.target.value)})
	}

	createMyAccount = () => {
		if (this.state.selectAccount.length > 0) { 
			const myArray = this.state.accountArray
			const myAccount = new Account(this.state.selectAccount, this.state.initialDeposit)
			myArray.add(myAccount)
			this.setState({
				createAccount: '',
				selectAccount: '',
				initialDeposit: '',
				accountArray: myArray
			})
		}
		else {
			alert('Please select account type !')
		}
	}

	handleChange = (e) => {
		this.setState({
			amountChange: Number(e.target.value),
			id: e.target.id
		})
	}

	handleDeposit = (e) => {
		if (e.target.id === this.state.id) {
			const myArray = this.state.accountArray
			myArray.acctArray[Number(e.target.id)].deposit(this.state.amountChange)
			this.setState({accountArray: myArray})
		}
	}

	handleWithdraw = (e) => {
		if (e.target.id === this.state.id) {
			const myArray = this.state.accountArray
			myArray.acctArray[Number(e.target.id)].withdraw(this.state.amountChange)
			this.setState({accountArray: myArray})
		}
	}

	handleRemove = (e) => {
		const myArray = this.state.accountArray
		myArray.remove(Number(e.target.id))
		this.setState({accountArray: myArray})
	}

	render() {
		let newAccount = <div />
		let myAccountInfo = <div />

		if (this.state.createAccount === 'create') {
			newAccount= <AccountRegister 
			accountType = {this.handleSelect}
			myDeposit = {this.depositAmount}
			myNewAccount = {this.createMyAccount} />
		}

		if (this.state.accountArray.acctArray.length > 0) {
			myAccountInfo = <AccountInfo 
			accountInfoArray = {this.state.accountArray}
			update = {this.handleChange}
			deposit = {this.handleDeposit}
			withdraw = {this.handleWithdraw}
			remove = {this.handleRemove} />
		}

		return (
		<div className='acctComp'>
		<button id='create' onClick={this.handleClick}>Create New Account</button>
		{newAccount}
		{myAccountInfo}
		</div>
		)
	}
}

export default AccountComp;