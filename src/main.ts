import './style.css'

let currentPlayer: 'X' | 'O' = 'X'
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
    thingClickedOn.textContent = currentPlayer
    // If currentPlayer is precisely the text 'X', make the currentPlayer 'O'
    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      // Otherwise it was already 'O', so make it an 'X'
      currentPlayer = 'X'
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
