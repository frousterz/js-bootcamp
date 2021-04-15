// Out Todos Object
let todos = getSavedTodos()

// filters object
const filters = {
  searchText: '',
  hideCompleted: false
}

// Render the todos
renderTodos(todos, filters)

// Events
// Filtering our todos (search)
document.querySelector('#search-text').addEventListener('input', (event) => {
  filters.searchText = event.target.value
  renderTodos(todos, filters)
})

// Form Management: Create Todo
document.querySelector('#create-todo-form').addEventListener('submit', (event) => {
  event.preventDefault()
  if (event.target.elements.todoText.value !== '') {
    todos.push({
      text: event.target.elements.todoText.value,
      completed: false
    })

    event.target.elements.todoText.value = ''
    renderTodos(todos, filters)
    saveTodos(todos)
  }
})

// Checkbox
document.querySelector('#hide-todos').addEventListener('change', (event) => {
  filters.hideCompleted = event.target.checked
  renderTodos(todos, filters)
})


