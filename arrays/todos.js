const todos = [
  {
    text: 'Meeting tomorrow at 8am',
    completed: false
  },
  {
    text: 'Soccer match with friends',
    completed: true
  },
  {
    text: 'Teaching Python at 8pm',
    completed: false
  },
  {
    text: 'Order cat food',
    completed: false
  },
  {
    text: 'Clean and organize room',
    completed: false
  }
]

// Searching 
const deleteTodo = (todos, todoText) => {
  let index = todos.find(function(todo, index){
    return todo.text.lowerCase() === todoText.lowerCase()
  })
  if (index > -1) {
    todos.splice(index, 1)
  }
}

// Filtering
const getThingsToDo = function (todos) {
  return todos.filter(function(todo) {
    return !todo.completed
  })
}

// Sorting
const sortTodos = (todos) => {
  todos.sort(function(a, b) {
    if (!a.completed && b.completed) {
      return -1
    } else if(a.completed && !b.completed){
      return 1
    }
    return 0
  })
}

console.log('-------- Amount of Todos ------- ')
console.log(`You have ${todos.length} todos.`)
console.log(todos)

console.log('-------- Pending Todos: filtering ------- ')
let pendingTodos = getThingsToDo(todos)
console.log(pendingTodos)

console.log('-------- Sorting by completed ------- ')
sortTodos(todos)
console.log(todos)

// // Delete 3rd element
// todos.splice(2, 1)
// // Add a new item onto the end
// todos.push('Do work')
// // Remove the first item fromthe list
// todos.shift()
// console.log('>>>\n', todos)

// // Using forEach
// todos.forEach(function (todo, index) {
//   console.log(`${index}. ${todo}`)
// })