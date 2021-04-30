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

// Remove a note from the list
const removeNote = (id) => {
  const noteIndex = notes.findIndex(function(note){
    return note.id === id
  })

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
  }
}

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
  let newNoteEl = document.createElement('li')
  let textEl = document.createElement('a')
  let buttonEl  = document.createElement('button')

  newNoteEl.classList = 'note'
  
  textEl.textContent = note.title
  textEl.setAttribute('href', `/edit.html#${note.id}`)

  buttonEl.textContent = 'x'
  buttonEl.classList = 'remove-note-btn'
  buttonEl.addEventListener('click', () => {
    removeNote(note.id)
    saveNotes(notes)
    renderNotes(notes, filters)
  })

  newNoteEl.appendChild(textEl)
  newNoteEl.appendChild(buttonEl)
  return newNoteEl
}