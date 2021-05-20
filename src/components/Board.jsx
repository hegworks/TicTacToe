import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import Square from "./Square";
import { makeStyles } from "@material-ui/core";

const myStyles = makeStyles({
	myTypography: {
		whiteSpace: "pre"
	}
});

function Board() {
	// states
	const [sqrVals, setSqrVals] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);

	let status = "";
	let winner = calculateWinner(sqrVals);
	status = winner
		? winner + " Won!"
		: (status = xIsNext ? "X\t\t\t<====\t\t\tO" : "X\t\t\t====>\t\t\tO");

	let renderSquare = i => {
		return <Square value={sqrVals[i]} onClick={() => handleClick(i)} />;
	};
	let handleClick = i => {
		if (!sqrVals[i] && !winner) {
			const sqrs = sqrVals.slice();
			sqrs[i] = xIsNext ? "X" : "O";
			setXIsNext(!xIsNext);
			setSqrVals(sqrs);
		}
	};

	return (
		<div>
			<Typography className={myStyles().myTypography}>
				{status}
			</Typography>
			<div className="board-row">
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className="board-row">
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className="board-row">
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
		</div>
	);
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

export default Board;
