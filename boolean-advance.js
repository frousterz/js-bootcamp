let pricing = 1000
let age = 26
let saving = age <= 18 ? pricing * 0.5 : pricing * 0.1

console.log('saving: ' + saving)

// else if
let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked) {
    console.log('account locked!')
} else if (userRole === 'admin') {
    console.log('welcome admin')
} else {
    console.log('welcome')
}