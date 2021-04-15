// Read existing notes from localStorage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes')

  if (notesJSON !== null) {
    return JSON.parse(notesJSON)
  } else {
    return []
  }
}

// Save Notes to localStorage
const saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
  let newNoteEl = document.createElement('li')
  let buttonEl  = document.createElement('button')

  newNoteEl.textContent = note.title
  newNoteEl.classList = 'note'
  buttonEl.textContent = 'x'
  buttonEl.classList = 'remove-note-btn'

  newNoteEl.appendChild(buttonEl)
  return newNoteEl
}

// Render Notes
const renderNotes = (notes, filters) => {
  let filteredNotes = notes.filter(note => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector('.notes-list').innerHTML = ''
  
  filteredNotes.forEach(function(note){
    let newNoteEl = generateNoteDOM(note)
    document.querySelector('.notes-list').appendChild(newNoteEl)
  })
}