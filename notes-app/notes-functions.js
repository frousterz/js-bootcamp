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

// Sort notes by filterBy
const sortNotes = (notes, sortBy) => {
  if(sortBy === 'byEdited'){
    return notes.sort(function(a, b){
      if(a.updatedAt > b.updatedAt) {
        return -1
      } else if(a.updatedAt < b.updatedAt){
        return 1
      } else {
        return 0
      }
    })
  } else if(sortBy === 'byCreated'){
    return notes.sort(function(a, b){
      if(a.createdAt > b.createdAt) {
        return -1
      } else if(a.createdAt < b.createdAt){
        return 1
      } else {
        return 0
      }
    })
  } else if(sortBy === 'alphabetical'){
    return notes.sort(function(a, b){
      if(a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1
      } else if(a.title.toLowerCase() > b.title.toLowerCase()){
        return 1
      } else {
        return 0
      }
    })
  }
}

// Render Notes
const renderNotes = (notes, filters) => {
  console.log("------> filters are: ", filters);
  notes = sortNotes(notes, filters.sortBy)
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

// Generate Las Edited Message
const generateLastEdited = (timestamp) => {
  return `Last edited ${moment(timestamp).fromNow()}`
}

