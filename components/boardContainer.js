class BoardContainer {
	constructor(props) {
		this.props = props;
		return this.render()
	}

	squareNotTaken(square) {
		return square.innerHTML === ""
	}

	row1Win = () => {
		let result =  
			(context.tds[0].innerHTML !== "") &&
			(context.tds[1].innerHTML !== "") &&
			(context.tds[2].innerHTML !== "") &&
			(context.tds[0].innerHTML === context.tds[1].innerHTML) && 
		  (context.tds[1].innerHTML === context.tds[2].innerHTML)
		 return result
	}

	row2Win = () => {
		let result =  
			((context.tds[3].innerHTML !== "") &&
			(context.tds[4].innerHTML !== "") &&
			(context.tds[5].innerHTML !== "")) &&
			(context.tds[3].innerHTML === context.tds[4].innerHTML) && 
		  (context.tds[4].innerHTML === context.tds[5].innerHTML)
		 return result
	}

	row3Win = () => {
		let result = 
			(context.tds[6].innerHTML !== "") &&
			(context.tds[7].innerHTML !== "") &&
			(context.tds[8].innerHTML !== "") &&
			(context.tds[6].innerHTML !== "") &&
			(context.tds[6].innerHTML === context.tds[7].innerHTML) && 
		  (context.tds[7].innerHTML === context.tds[8].innerHTML)
		 return result
	}

	col1Win = () => {
		let result =  
			(context.tds[0].innerHTML !== "") &&
			(context.tds[3].innerHTML !== "") &&
			(context.tds[6].innerHTML !== "") &&
			(context.tds[0].innerHTML !== "") &&
			(context.tds[0].innerHTML === context.tds[3].innerHTML) && 
		  (context.tds[3].innerHTML === context.tds[6].innerHTML)
		 return result
	}

	col2Win = () => {
		let result =  
			(context.tds[1].innerHTML !== "") &&
			(context.tds[4].innerHTML !== "") &&
			(context.tds[7].innerHTML !== "") &&
			(context.tds[1].innerHTML !== "") &&
			(context.tds[1].innerHTML === context.tds[4].innerHTML) && 
		  (context.tds[4].innerHTML === context.tds[7].innerHTML)
		 return result
	}

  col3Win = () => {
		let result =  
			(context.tds[2].innerHTML !== "") &&
			(context.tds[5].innerHTML !== "") &&
			(context.tds[8].innerHTML !== "") &&
			(context.tds[2].innerHTML !== "") &&
			(context.tds[2].innerHTML === context.tds[5].innerHTML) && 
		  (context.tds[5].innerHTML === context.tds[8].innerHTML)
		 return result
	}

	colWin = () => {
		let result =  this.col1Win() || this.col2Win() || this.col3Win()
		return result
	}

	rowWin = () => {
		let result =  this.row1Win() || this.row2Win() || this.row3Win()
		return result
	}

	diagonalWin = () => {
		// debugger
		let result =  
			(context.tds[0].innerHTML === context.tds[4].innerHTML) && 
				(context.tds[4].innerHTML === context.tds[8].innerHTML)  && 
				(context.tds[8].innerHTML !== "") || 
			(context.tds[2].innerHTML === context.tds[4].innerHTML) && 
				context.tds[4].innerHTML === context.tds[6].innerHTML && 
				(context.tds[6].innerHTML !== "")
		return result
	}

	isWinner() {
		let result =  this.rowWin() || this.colWin() || this.diagonalWin()
		return result
	}

	replaceSquare(square) {
		let newSquare = Square({id: square.id, useContext: true })
    square.parentElement.replaceChild(newSquare, square )
		let index = context.tds.findIndex(sqr => sqr.id == square.id);
		context.tds[index] = newSquare;
	}

  addLetter = (e) => {
	 	const square = event.target
	 	if(this.squareNotTaken(square)) {
	 		this.replaceSquare(square)
			this.isWinner() ? this.props.declareWinner() : null
			context.turn = this.props.toggleTurn()
	 	}
	}
	
	render() {
		let props = Object.freeze({
			addLetter: this.addLetter,
			isWinner: this.isWinner, 
			componentDidMount: this.componentDidMount
		})
		return(new Board(props))
	}	
}