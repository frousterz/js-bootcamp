// Get saved todos from localStorage
const getSavedTodos = function(){
  const todosJSON = localStorage.getItem('todos')
  if (todosJSON !== null) {
    return JSON.parse(todosJSON)
  } else {
    return []
  }
}

// Save todos to localStorage
const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// Generate Todo DOM
const generateTodoDOM = (todo) => {
  let newTodoEl = document.createElement('p')
  newTodoEl.textContent = todo.text
  return newTodoEl
}

// Generate Summary DOM
const generateSummaryDOM = (todos) => {
  // Filter fot incomplete todos
  const incompleteTodos = todos.filter(todo => {
    return !todo.completed
  })
  
  let summary = document.createElement('h3')
  summary.textContent = `You have ${incompleteTodos.length} todos left.`
  return summary
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
  
  // Create the header with the amount of incomplete todos
  let summary = generateSummaryDOM(todos)
  todosContainer.appendChild(summary)
  
  filteredTodos.forEach(function(todo){
    let newTodoEl = generateTodoDOM(todo)
    todosContainer.appendChild(newTodoEl)
  })
}