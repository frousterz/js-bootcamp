// const Person = function(firstName, lastName, age, likes) {
//   this.firstName = firstName
//   this.lastName = lastName
//   this.age = age
//   this.likes = likes
// }

// // Prototypal inheritance
// Person.prototype.getBio = function() {
//   let bio = `${this.firstName} is ${this.age}.`

//   this.likes.forEach((like)=> {
//     bio = bio + ` ${this.firstName} likes ${like}.`
//   })
//   return bio
// }

// Person.prototype.setName = function(fullName) {
//   const names = fullName.split(" ")
//   this.firstName = names[0]
//   this.lastName = names[1]
// }
// const me = new Person("Felipe", "Salas", 27, ['food', 'cats'])
// me.setName("Jesus Salas")
// const p2 = new Person("Scarleth", "Gould", 26)
// console.log(me.getBio())
// console.log(me)
// console.log(p2)

// Person using classes

class Person {
  constructor(name, lastName, age, likes) {
    this.name = name
    this.lastName = lastName
    this.age = age
    this.likes = likes
  }

  getBio () {
    return `My name is ${this.name + ' ' + this.lastName}. I'm ${this.age} years old and I like ${this.likes.join(', ')}`
  }
}

let p = new Person('Felipe', 'Salas', 27, ['Biking', 'Travel', 'Cats'])
console.log(p.getBio())