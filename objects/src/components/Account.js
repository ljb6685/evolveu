class Account {
     constructor(accountName, startingBalance) {
        this.accountName = accountName;
        this.startingBalance = startingBalance;
    }
    deposit = (amount) => {
        return (
        this.startingBalance = (this.startingBalance + Number(amount))
        )}
    withdraw = (amount) => {
        if (amount <= this.startingBalance) {
            return (
            this.startingBalance = (this.startingBalance - Number(amount))
            )}
    }
    balance = () => {
        return this.startingBalance;
    }
 }
   export default Account;