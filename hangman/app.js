// Challenge 1
// 1. Set up the word instance property as an array of lower case letters
// 2. Set up another instancer property to store guessed words
// 3. Create a method that gives you the word puzzle back

// Challenge 2
// Create a method for making a guest
// 1. Should accept a character for guessing 
// 2. Should add unique guesses to list of guesses
// 3. Should decrement the guesses left

// Challenge 3
// 1. Display the puzzle to the browser instead of console
// 2. Display the guesses left to the browser instea of console
// 3. Separate the hangman definition from the rest of the app code (use app.js)
// 4. Start the game and see "playing"
// 5. make incorrect attemps to see failed

const game = new Hangman("cat", 2)
let wordElement = document.getElementById('word')
let statusElement = document.getElementById('status')

wordElement.innerHTML = game.getPuzzle()
statusElement.innerHTML = game.status
console.log(game.status)

window.addEventListener('keypress', function(e) {
  const letter = String.fromCharCode(e.charCode)
  game.guess(letter)

  wordElement.innerHTML = game.getPuzzle()
  statusElement.innerHTML = game.status

  console.log(game.remainingGuesses)
  console.log(game.status)
})



