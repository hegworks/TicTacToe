import React, { useState } from "react";
import Square from "./Square";

function Board() {
	const [sqrVals, setSqrVals] = useState(Array(9).fill(null));
	const status = "next player: X";
	let renderSquare = i => {
		return <Square value={sqrVals[i]} onClick={() => handleClick(i)} />;
	};
	let handleClick = i => {
		const sqrs = sqrVals.slice();
		sqrs[i] = "X";
		setSqrVals(sqrs);
	};
	return (
		<div>
			<div className="status">{status}</div>
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

export default Board;
