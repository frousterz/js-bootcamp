let myBook = {
    title: 'Bikes and Fun: A BMX History',
    author: 'Larry Edgar',
    pageCount: 867
}

console.log(myBook.title)

// Challenge
let info = {
    name: 'Felipe Salas',
    age: 27,
    location: 'Tucurrique, Cartago, CR',
    infoToString: function (){
        return `Hi, my name is ${info.name}, I live in ${info.location} and I'm ${info.age} years old.`
    }
}

console.log(info.infoToString())

// Objects with functions

let greetUser = (name) => {
    return {
        greet: `Welcome ${name} to HyxCommerce`
    }
}

console.log(greetUser('Mary'))