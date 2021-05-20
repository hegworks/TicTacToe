import React, { Component, Fragment } from "react";
import Square from "./Square";

class Board extends Component {
	state = {};

	renderSquare(i) {
		return <Square value={i} />;
	}

	render() {
		const status = "next player: X";

		return (
			<Fragment>
				<div className="status">{status}</div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</Fragment>
		);
	}
}

export default Board;
