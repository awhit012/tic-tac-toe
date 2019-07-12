class Board {

	constructor(props) {
		this.props = props
		return this.render()
	}

	render = () => {
		const boardEl = document.createElement('table')
		const thead = document.createElement('thead')
		const tbody = document.createElement('tbody')
		const tfoot = document.createElement('tfoot')
		const tr = document.createElement('tr')
		const tr2 = tr.cloneNode()
		const tr3 = tr.cloneNode()
		context.tds = []
		let useContext = this.props.gameOver
		for(let i=0; i<9; i++) {
			context.tds.push(Square(
				Object.freeze({
					id: `s${i}`,
					useContext: useContext
				})
			))
		}

		context.tds.forEach((td, idx) => {
			if(idx < 3) {
				tr.appendChild(td)
			} else if (idx < 6) {
				tr2.appendChild(td)
			} else {
				tr3.appendChild(td)
			}
		})
		// do I need thead etc?
		thead.appendChild(tr)
		tbody.appendChild(tr2)
		tfoot.appendChild(tr3)

		
		boardEl.appendChild(thead)
		boardEl.appendChild(tbody)
		boardEl.appendChild(tfoot)
		boardEl.style.cssText = `
			border-spacing: 0; 
			border-collapse: collapse;
			margin: 0 auto;`
		boardEl.id = "board"
		// implement fully
		this.props.gameOver ? "" : boardEl.addEventListener("click", this.props.addLetter)
		return boardEl
	}
	
}