const notes = ['note 1', 'note 2', 'note 3']
console.log(notes)

console.log('***************** Push/Pop/Shift/Unshift *******************')
// Add element to the end
notes.push('note 4')
console.log(notes)

// Remove element from the end
notes.pop()
console.log(notes)

// Add element to the beginning
notes.unshift('new note')
console.log(notes)

// Remove element from the beginning
notes.shift()
console.log(notes)

console.log('***************** Splice *******************')
// splice:
// The splice() method changes the contents of an array by removing or replacing 
// existing elements and/or adding new elements in place.
// --------------> splice(starting point, number of elements to remove, [element to add if you want])
notes.splice(1, 1)
console.log(notes)
notes.splice(1, 0, 'Hello Note')
console.log(notes)

console.log('**** Replace values ****')
notes[2] = 'This is another note'
console.log(notes)
