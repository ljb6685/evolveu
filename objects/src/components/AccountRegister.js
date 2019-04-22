import React from 'react'

class AccountRegister extends React.Component {
  	render(props) {
        return (
		    <div className='cardContainer'>
			    <div className='typeSelect'>
				    <select onChange={this.props.accountType}>
					    <option value=''>Account Type</option>
					    <option value='Checking'>Checking</option>
					    <option value='Saving'>Saving</option>
					</select>
			    </div>
                <input id='myDeposit' type='number' onChange={this.props.myDeposit}
                placeholder='Deposit Amount'></input>
			    <button id='myNewAccount' onClick={this.props.myNewAccount}>
                Create New Account</button>
		    </div>
		)
	}
}

export default AccountRegister;