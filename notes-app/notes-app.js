// Notes Object
const notes = getSavedNotes()

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
document.querySelector('#create-note-form').addEventListener('submit', function(event) {
  event.preventDefault()
  notes.push({
    id: uuidv4(),
    title: event.target.elements.noteTitle.value
           ? event.target.elements.noteTitle.value
           :'Unnamed Note',
    body: event.target.elements.noteBody.value
           ? event.target.elements.noteBody.value
           :'Body Not Present'
  })
  event.target.elements.noteTitle.value = ''
  event.target.elements.noteBody.value = ''
  renderNotes(notes, filters)
  saveNotes(notes)
})

// Sorting using the select (not completed yet)
document.querySelector('#sort-notes').addEventListener('change', function(event) {
  console.log(event.target.value);
})