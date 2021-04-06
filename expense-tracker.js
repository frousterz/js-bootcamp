let myAccount = {
    name: 'Felipe Salas C',
    expenses: 0,
    income: 0
}

const addExpense = (account, amount) => {
    account.expenses += amount
}

const addIncome = (account, amount) => account.income += amount

const resetAccount = (account) => {
    account.income = 0
    account.expenses = 0
}

const accountSummary = (account) => {
    let balance = account.income - account.expenses
    return `>>> Account for ${account.name} has $${balance}. ` + 
            `$${account.income} in income. $${account.expenses} in expenses.`
}

addExpense(myAccount, 1000)
addIncome(myAccount, 1654)
console.log(myAccount)
console.log(accountSummary(myAccount))
resetAccount(myAccount)
console.log(myAccount)
