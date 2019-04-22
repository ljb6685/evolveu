import Account from './Account.js'
import AccountController from './AccountController.js'

test('Test the AccountController functions', () => {
	const conTest = new AccountController()
	const Michael = new Account('Michael', 200)
    const Larry = new Account('Larry', 150)
    const Greg = new Account('Greg', 100)
	
	// add new accounts
	conTest.add(Michael)
	expect(conTest.acctArray[0]).toBe(Michael)
	console.log('add new account:', conTest.acctArray[0].accountName)

    conTest.add(Larry)
    expect(conTest.acctArray[1]).toBe(Larry)
    console.log('add new account:', conTest.acctArray[1].accountName)

    conTest.add(Greg)
    expect(conTest.acctArray[2]).toBe(Greg)
    console.log('add new account:', conTest.acctArray[2].accountName)
	
	// remove account
	conTest.remove(1)
	console.log('removed')
    expect(conTest.acctArray[0]).toBe(Michael)
    expect(conTest.acctArray[1]).toBe(Greg)
    expect(conTest.acctArray[2]).toBe()

	// sum amount
	conTest.sum()
	console.log('sum', conTest.sum)
	expect(conTest.sum).toBe(300)

	// max amount
	conTest.max()
	console.log('max', conTest.maxAccount)
	expect(conTest.maxAccount).toBe(200)
	
	// min amount
	conTest.min()
	console.log('min', conTest.minAccount)
	expect(conTest.minAccount).toBe(100)
})