// Create an object named account that represents a bank account. It should
// contain a balance property that stores the account's current balance.

// Add a deposit method to the account object that takes a single argument, the
// value of the deposit. The deposit method adds the value of the argument
// passed to it to the account's balance, and then returns the deposit amount.

// Add a withdraw method to the account object that takes a single argument, the
// amount to withdraw. It should subtract the amount from the account's balance
// and return the amount subtracted.

// If the account contains less than the withdrawal amount, the method should
// limit the withdrawal to the amount available, and return the actual amount
// withdrawn. This should leave the account with a balance of 0.

// Each account should have a record of every deposit and withdrawal applied to
// it. To do this, add a property named transactions to account that contains an
// array of transactions, each of which is an object with type and amount
// properties.

// We also need an object to manage accounts: a bank. Create a function that
// returns an object that represents a bank. The bank should have a property
// named accounts that represents a list of accounts.
function makeBank() {
  let accountNumber = 101;
  let accounts = [];

  let bank = {
    openAccount() {
      let newAccount = makeAccount(accountNumber);
      accounts.push(newAccount);
      accountNumber += 1;
      return newAccount;
    },

    transfer(source, destination, amount) {
      destination.deposit(source.withdraw(amount));
      return amount;
    }
  }

  return bank;
}

function makeAccount(number) {
  let balance = 0;
  let accountNumber = number;
  let transactions = [];

  let account = {
    deposit(amount) {
      balance += amount;
      transactions.push({ type: 'Deposit', amount })
      return amount;
    },
  
    withdraw(amount) {
      let actual = amount > balance ? balance : amount;
      balance -= actual;
      transactions.push({ type: 'Withdrawl', amount: actual })
      return actual;
    },

    transactions() {
      return transactions;
    },

    balance() {
      return balance;
    },

    number() {
      return accountNumber;
    }
  }

  return account;
}