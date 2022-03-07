import './style.css'

const allSquares = document.querySelectorAll('li')
// console.log(allSquares)
allSquares.forEach((squares) =>
  squares.addEventListener('click', handleClickSquare)
)
function handleClickSquare(event) {
  const thingClickedOn = event.target
  thingClickedOn.textContent = 'X'
}
// firstListItem?.addEventListener('click', handleClickSquare)
