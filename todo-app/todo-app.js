// Out Todos Object
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
    completed: true
  },
  {
    text: 'Clean and organize room',
    completed: false
  }
]

// filters object
const filters = {
  searchText: '',
  hideCompleted: false
}

// Rendering (based on search text)
const renderTodos = (todos, filters) => {
  // Filter the todos based on the search text
  let filteredTodos = todos.filter( (todo) => {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  // hide completed todos
  if (filters.hideCompleted)
    filteredTodos = filteredTodos.filter(function(todo) {
      return !todo.completed
    })

  // Get the todos container and clean it
  let todosContainer = document.querySelector('.todos-container')
  todosContainer.innerHTML = ''

  // Filter fot incomplete todos
  const incompleteTodos = todos.filter(todo => {
    return !todo.completed
  })
  // Create the header with the amount of incomplete todos
  let summary = document.createElement('h3')
  summary.textContent = `You have ${incompleteTodos.length} todos left.`
  todosContainer.appendChild(summary)
  
  filteredTodos.forEach(function(todo){
    let newParagraph = document.createElement('p')
    newParagraph.textContent = todo.text
    todosContainer.appendChild(newParagraph)
  })
}

renderTodos(todos, filters)


// Events

// Filtering our todos (search)
document.querySelector('#search-text').addEventListener('input', (event) => {
  filters.searchText = event.target.value
  renderTodos(todos, filters)
})

// Form Management
document.querySelector('#create-todo-form').addEventListener('submit', (event) => {
  event.preventDefault()
  if (event.target.elements.todoText.value !== '') {
    todos.push({
      text: event.target.elements.todoText.value,
      completed: false
    })

    event.target.elements.todoText.value = ''
    renderTodos(todos, filters)
  }
})

// Checkbox
document.querySelector('#hide-todos').addEventListener('change', (event) => {
  filters.hideCompleted = event.target.checked
  renderTodos(todos, filters)
})


