import React, { Component } from "react";
import Board from "./Board";
import {
	List,
	ListItem,
	ListItemText,
	ListSubheader,
	Typography
} from "@material-ui/core";

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			history: [{ squares: Array(9).fill(null) }],
			xIsNext: true,
			stepNumber: 0
		};
	}

	handleClick = i => {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = current.squares.slice();
		if (!squares[i] && !this.winner) {
			let sqrs = squares.slice();
			sqrs[i] = this.state.xIsNext ? "X" : "O";
			this.setState({
				history: history.concat([
					{
						squares: sqrs
					}
				]),
				stepNumber: history.length,
				xIsNext: !this.state.xIsNext
			});
		}
	};

	jumpTo(step) {
		this.setState({
			stepNumber: step,
			xIsNext: step % 2 === 0
		});
	}

	render() {
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const winner = calculateWinner(current.squares);

		const moves = history.map((step, move) => {
			const desc = move ? "Go to move #" + move : "Go to game start";
			return (
				<ListItem key={move} button>
					<ListItemText on onClick={() => this.jumpTo(move)}>
						{desc}
					</ListItemText>
				</ListItem>
			);
		});

		let status;
		status = winner
			? winner + " Won!"
			: (status = this.state.xIsNext
					? "X\t\t\t<====\t\t\tO"
					: "X\t\t\t====>\t\t\tO");

		return (
			<div className="game">
				<Typography style={{ whiteSpace: "pre" }}>{status}</Typography>
				<div className="game-board">
					<Board
						sqrVals={current.squares}
						handleClick={i => this.handleClick(i)}
					/>
				</div>
				<List subheader={<ListSubheader>History</ListSubheader>}>
					{moves}
				</List>
			</div>
		);
	}
}

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (
			squares[a] &&
			squares[a] === squares[b] &&
			squares[a] === squares[c]
		) {
			return squares[a];
		}
	}
	return null;
}

export default Game;
