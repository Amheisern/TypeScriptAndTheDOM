import './style.css'

let currentPlayer: 'X' | 'O' = 'X'

let moveCounter = 0

// See in the console we can look at the moveCounter as we click.
// This means that currentPlayer is a string, but can *only* be the string X or the string O
// Defines a method for us to handle the click
function handleClickSquare(event: MouseEvent) {
  // Get the target of the click
  const thingClickedOn = event.target
  // If the thing clicked on is an LI Element
  // - This does several things:
  // - 1. Checks that the target isn't null
  // - 2. Let's TypeScript know that *inside* this if statement
  // the thingClickedOn is an LI element, and thus we can
  // change its textContent
  if (thingClickedOn instanceof HTMLLIElement) {
    // Doesn't allow clicking the box more than once
    //We do this by ENDING (returning) from the function
    if (thingClickedOn.classList.contains('taken')) {
      console.log('No')
      return
    }
    // Then every time we make a good move:
    // Increment the move counter
    moveCounter++
    thingClickedOn.textContent = currentPlayer

    //Adds the taken class so that we SHOW the user
    // They can't select this item!
    thingClickedOn.classList.add('taken')

    // If currentPlayer is precisely the text 'X', make the currentPlayer 'O'
    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      // Otherwise it was already 'O', so make it an 'X'
      currentPlayer = 'X'
      // Get the header to query for the first `h1`
      const header = document.querySelector('h1')
      // Interpolate a string with the header and the count of moves
      // and replace the text content of our header!
      if (header instanceof HTMLHeadingElement) {
        header.textContent = `Move ${moveCounter} of Tic Tac Toe`
      }
    }
  }
}
const allSquares = document.querySelectorAll('li')
allSquares.forEach((square) =>
  square.addEventListener('click', handleClickSquare)
)

// import './style.css'

// const allSquares = document.querySelectorAll('li')
// // console.log(allSquares)
// function handleClickSquare(event: MouseEvent) {
//   const thingClickedOn = event.target

//   if (thingClickedOn) {
//     thingClickedOn.textContent = 'X'
//   }
//   allSquares.forEach((squares) =>
//     squares.addEventListener('click', handleClickSquare)
//   )
// }
// firstListItem?.addEventListener('click', handleClickSquare)
