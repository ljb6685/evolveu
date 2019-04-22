import Account from './Account.js'

test('Test the Account functions', () => {
	const accTest = new Account('Michael', 25)
	// constructor
	expect(accTest.accountName).toBe('Michael')
	expect(accTest.startingBalance).toBe(25)
	// deposit
	expect(accTest.deposit(10)).toBe(35)
	console.log('deposit test:', accTest.startingBalance)
	// withdraw
	expect(accTest.withdraw(30)).toBe(5)
	console.log('withdraw test:', accTest.startingBalance)
	// balance
	expect(accTest.startingBalance).toBe(5)
	console.log('balance test:', accTest.startingBalance)
})