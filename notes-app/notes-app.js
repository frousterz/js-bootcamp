// Notes Object
let notes = getSavedNotes()

// Filters Object
let filters = {
  searchText: '',
  sortBy: 'byEdited'
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
  const timestamp = moment().valueOf()

  let note = {
    id: uuidv4(),
    title: 'Unnamed Note',
    body: 'Body Not Present',
    createdAt: timestamp,
    updatedAt: timestamp
  }
  notes.push(note)
  saveNotes(notes)

  document.location.assign(`/edit.html#${note.id}`)
})

// Sorting using the select
document.querySelector('#sort-notes').addEventListener('change', function(event) {
  filters.sortBy = event.target.value
  console.log("---> filters.sortBy: ", filters.sortBy)
  renderNotes(notes, filters)  
})

window.addEventListener('storage', function(event) {
  if(event.key == 'notes'){
    notes = JSON.parse(event.newValue)
    renderNotes(notes, filters)
  }
})
