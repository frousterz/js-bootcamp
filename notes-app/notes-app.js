// Notes Object
const notes = [
  {
    title: 'Next Trip',
    body: 'I would love to go to Spain'
  },
  {
    title: 'Habits to work on',
    body: 'Excercise. Eating a bit better'
  },
  {
    title: 'Call my friend Fernando',
    body: 'Call Fernando to talk about next projects'
  },
  {
    title: 'House Improvements',
    body: 'Restore garden and paint the living room'
  },
  {
    title: 'Visit my girlfriend',
    body: 'Visit my gf tomorrow for dinner'
  },
  {
    title: 'Office modification',
    body: 'Buy furniture and paint to start improving my office'
  }
]

// Filters Object
const filters = {
  searchText: ''
}

// Render notes (including filtering)
const renderNotes = (notes, filters) => {
  let filteredNotes = notes.filter(note => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector('.notes-list').innerHTML = ''
  
  filteredNotes.forEach(function(note){
    let newNote = document.createElement('li')
    newNote.textContent = note.title
    newNote.classList = 'note'
    document.querySelector('.notes-list').appendChild(newNote)
  })
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
    title: event.target.elements.noteBody.value,
    body: event.target.elements.noteTitle.value
  })
  event.target.elements.noteTitle.value = ''
  event.target.elements.noteBody.value = ''
  renderNotes(notes, filters)
})

// Sorting using the select (not completed yet)
document.querySelector('#sort-notes').addEventListener('change', function(event) {
  console.log(event.target.value);
})