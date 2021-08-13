// Challenge 1
// 1. Set up the word instance property as an array of lower case letters
// 2. Set up another instancer property to store guessed words
// 3. Create a method that gives you the word puzzle back

// Challenge 2
// Create a method for making a guest
// 1. Should accept a character for guessing 
// 2. Should add unique guesses to list of guesses
// 3. Should decrement the guesses left

const Hangman = function (word, reaminingGuesses) {
  this.word = word.toLowerCase().split('')
  this.reaminingGuesses = reaminingGuesses
  this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function(){
  let puzzle = ''
  this.word.forEach((letter)=> {
    this.guessedLetters.includes(letter) || letter == ' '
    ? puzzle += letter
    : puzzle = puzzle + '*'
  })
  return puzzle
}

Hangman.prototype.guess = function(letter) {
  letter = letter.toLowerCase()
  const isUnique = !this.guessedLetters.includes(letter)
  const isBadGuess = !this.word.includes(letter)
  
  if (isUnique) {
    this.guessedLetters.push(letter)
  }

  if (isUnique && isBadGuess) {
    this.reaminingGuesses -= 1
  }
}

const game = new Hangman("foo bar", 5)
// window.addEventListener('keypress', function(e) {
//   console.log(e.key)
// })
console.log(game.getPuzzle())
console.log(game.reaminingGuesses)