// Notes Object
let notes = getSavedNotes()

// Filters Object
const filters = {
  searchText: ''
}

// Render all notes
renderNotes(notes, filters)

// Events
// Filtering notes: search
document.querySelector('#search-text').addEventListener('input', (event) => {
  filters.searchText = event.target.value
  renderNotes(notes, filters)
})

// Manipulating form: create note
document.querySelector('#create-note').addEventListener('click', function(event) {
  event.preventDefault()
  let note = {
    id: uuidv4(),
    title: 'Unnamed Note',
    body: 'Body Not Present'
  }
  notes.push(note)
  saveNotes(notes)

  document.location.assign(`/edit.html#${note.id}`)
})

// Sorting using the select (not completed yet)
document.querySelector('#sort-notes').addEventListener('change', function(event) {
  console.log(event.target.value);
})

window.addEventListener('storage', function(event) {
  if(event.key == 'notes'){
    notes = JSON.parse(event.newValue)
    renderNotes(notes, filters)
  }
})