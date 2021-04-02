// Function: input - code - output

let greetUser = function () {
    return 'Welcome user!'
}

console.log(greetUser())
console.log(greetUser())
console.log(greetUser())

let square = function (number) {
    return number*number
}

console.log(square(12))
console.log(square(4))
console.log(square(5))

// Challenge
let fahrenheitToCelsius = function (degrees) {
    return (degrees - 32) * 5/9
}

console.log('50F˚ to C˚: ' + fahrenheitToCelsius(50) + 'C˚')