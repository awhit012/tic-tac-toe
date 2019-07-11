# Tic Tac Toe

## Vanilla JS the React Way

#### Principles

1. Component Architecture
2. One Way Data-binding
3. Data passed down as Immutable `Props` using Object.freeze
4. Data tracked within components using a `state` object
5. Global variable can be placed in a `context` object


Notes:

Need to keep track of X and Os in each square as props of square, passed from state of boardContainer

need to rerender square when clicked

need to make sure I'm not updating props anywhere, maybe make props read only


board container has functionality of board
board just renders the board

square needs square functionality passed in? no. it will just rerender.



put event listeners in componentDidMount
