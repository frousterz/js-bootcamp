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

// Searching
const findNote = (notes, noteTitle) => {
  return notes.find(function(note){
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}

// Filtering
const findNotes = (notes, query) => {
  return notes.filter(function(note, index) {
    let isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    let isBodyMatch  = note.body.toLowerCase().includes(query.toLowerCase())
    return isTitleMatch || isBodyMatch
  })
}

// Sorting
const sortNotes = (notes) => {
  notes.sort(function(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1
    } else if( a.title.toLowerCase() > b.title.toLowerCase()){
      return 1
    }
    return 0
  })
}

console.log('---------- find ----------')
const note = findNote(notes, 'house Improvements')
console.log(note)

console.log('---------- filter ----------')
let filteredNotes = findNotes(notes, 'imp')
console.log(filteredNotes)

console.log('---------- sorting ----------')
sortNotes(notes)
console.log(notes)
// const index = notes.findIndex(function(note, index){
//   return note.title === 'Next Trip'
// })

// console.log(index)
