import React from "react";
import Square from "./Square";
import { makeStyles } from "@material-ui/core";
/**
 * CSS
 */
const myStyles = makeStyles({
	rows: {}
});

function Board(props) {
	let renderSquare = i => {
		return (
			<Square
				value={props.sqrVals[i]}
				onClick={() => props.handleClick(i)}
			/>
		);
	};
	return (
		<div>
			<div className={myStyles().rows}>
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className={myStyles().rows}>
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className={myStyles().rows}>
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
		</div>
	);
}

export default Board;
