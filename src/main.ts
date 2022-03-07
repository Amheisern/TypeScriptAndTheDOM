import './style.css'
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
    thingClickedOn.textContent = 'X'
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
