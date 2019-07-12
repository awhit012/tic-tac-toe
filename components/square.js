const Square = (props) => {
	let square = document.createElement("td")
	square.id = props.id
	square.classList.add('square')
	props.useContext ? square.innerHTML = context.turn : ""
	return square
}