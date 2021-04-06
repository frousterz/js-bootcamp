// Improving the expense tracker
let account = {
  name: 'Felipe Salas C',
  expenses: [],
  income: [],
  addExpense: function(description, amount) {
    this.expenses.push ({
      amount: amount,
      description: description
    })
  },
  addIncome: function(description, amount) {
    this.income.push ({
      amount: amount,
      description: description
    })
  },
  getAccountSummary : function(){
    let expensesAmount = 0
    let incomeAmount = 0
    let balance = 0
    
    this.expenses.forEach(expense => expensesAmount += expense.amount)
    this.income.forEach(income => incomeAmount += income.amount)

    balance = incomeAmount - expensesAmount

    return `${this.name} has a balance of $${balance}.` + 
      ` $${incomeAmount} in income and $${expensesAmount} in expenses.`
  }
}

// Expense -> description, amount
// addExpense -> description. amount
// getAccountSummary -> toal up all expenses 

account.addIncome('Payroll', 2500)
account.addIncome('Payroll', 1058)
account.addExpense('Rent', 1500)
account.addExpense('Coffee', 2.5)
console.log("---------- Account ----------")
console.log(account)
console.log("---------- Summary ----------")
console.log(account.getAccountSummary())
