const ScoreBoard = (props) => {
	const board = document.createElement('div')
	const h1 = document.createElement('h1')
	h1.innerHTML = 'Welcome to Tic-Tac-Toe!'
	
	const btn = document.createElement('button')
	btn.innerHTML = 'Clear Board'
	btn.addEventListener("click", props.clearBoard)

	const h2 = document.createElement('h2')
	if(props.winner) {
		h2.innerHTML = `You won ${context.turn}!!!`
	} else {
		h2.innerHTML = `It's ${context.turn}'s turn!`
	}

	board.appendChild(h1)
	board.appendChild(btn)
	board.appendChild(h2)

	board.style.cssText = `text-align: center;`
	board.id = "scoreBoard"
	return board
}