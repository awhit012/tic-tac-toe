const Square = (props) => {
	let square = document.createElement("td")
	props.id[0] === "s" ? square.id = `${props.id}` : square.id = `s${props.id}`
	square.classList.add('square')
	props.useContext ? square.innerHTML = context.turn : ""
	return square
}