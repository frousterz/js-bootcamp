const noteId = location.hash.substring(1)
let notes = getSavedNotes()

// Find note based on the id from the URL
let note = notes.find(function (note) {
  return note.id === noteId
})

if (note === undefined) {
  location.assign('/')
}

document.querySelector('#note-title').value = note.title
document.querySelector('#note-body').value = note.body

// Events
// Update note title
document.querySelector('#note-title').addEventListener('input', (event) => {
  note.title = event.target.value
  saveNotes(notes)
})

// Update note body
document.querySelector('#note-body').addEventListener('input', (event) => {
  note.body = event.target.value
  saveNotes(notes)
})

// Remove note and go the home page
document.querySelector('#remove-note').addEventListener('click', function() {
  removeNote(noteId)
  saveNotes(notes)
  location.assign('/')
})

// Event: storage is fired when data in the localstorage changes
window.addEventListener('storage', (event) => {
  if (event.key === 'notes') {
    notes = JSON.parse(event.newValue)

    note = notes.find(function (note) {
      return note.id === noteId
    })
    
    if (note === undefined) {
      location.assign('/')
    }
    
    document.querySelector('#note-title').value = note.title
    document.querySelector('#note-body').value = note.body
  }
})