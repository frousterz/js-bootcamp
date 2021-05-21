const noteId = location.hash.substring(1)
let notes = getSavedNotes()

// Find note based on the id from the URL
let note = notes.find((note) => note.id === noteId)

if (!note) {
  location.assign('/')
}

document.querySelector('#note-title').value = note.title
document.querySelector('#note-body').value = note.body
const dateElement = document.querySelector('#last-edit')

dateElement.textContent = generateLastEdited(note.updatedAt)

// Events
// Update note title
document.querySelector('#note-title').addEventListener('input', (event) => {
  note.title = event.target.value
  note.updatedAt = moment().valueOf()
  dateElement.textContent = generateLastEdited(note.updatedAt)
  saveNotes(notes)
})

// Update note body
document.querySelector('#note-body').addEventListener('input', (event) => {
  note.body = event.target.value
  note.updatedAt = moment().valueOf()
  dateElement.textContent = generateLastEdited(note.updatedAt)
  saveNotes(notes)
})

// Remove note and go the home page
document.querySelector('#remove-note').addEventListener('click', () => {
  removeNote(noteId)
  saveNotes(notes)
  location.assign('/')
})

// Event: storage is fired when data in the localstorage changes
window.addEventListener('storage', (event) => {
  if (event.key === 'notes') {
    notes = JSON.parse(event.newValue)

    note = notes.find((note) => note.id === noteId)
    
    if (!note) {
      location.assign('/')
    }
    dateElement.textContent = generateLastEdited(note.updatedAt)
    document.querySelector('#note-title').value = note.title
    document.querySelector('#note-body').value = note.body
  }
})