let context = {
	turn: "X",
	tds: []
}

class App {
	constructor() {
		this.app = document.getElementById('app')
		this.render()
	}

	boardProps(options) {
		return Object.freeze({
			toggleTurn: this.toggleTurn, 
			declareWinner: this.declareWinner,
			gameOver: options.gameOver
		})
	}

	toggleTurn = () => {
		context.turn === "X" ? context.turn = "O" : context.turn = "X"
		this.updateScoreBoard()
		return context.turn
	}

	declareWinner = () => {
		this.updateScoreBoard(true)
		app.replaceChild(
			new BoardContainer(this.boardProps({gameOver: true})), board )
	}
	
	updateScoreBoard(winner) {
		const scoreBoard = document.getElementById("scoreBoard")
		app.replaceChild(
			ScoreBoard(Object.freeze({
				clearBoard: this.clearBoard,
				winner: winner
			})), scoreBoard)
	}

	clearBoard = () => {
		let board = document.getElementById("board")
		context.turn = "X"
		app.replaceChild(
			new BoardContainer(this.boardProps({})), board )
	}

	render() {
		app.appendChild(
			ScoreBoard(Object.freeze({
				clearBoard: this.clearBoard
			})))
		
		app.appendChild(
			new BoardContainer(this.boardProps({}))
		)
	}
}

new App()