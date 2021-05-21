import React from "react";
import { Button, makeStyles } from "@material-ui/core";

/**
 * CSS
 */
const myStyles = makeStyles({
	myButton: {
		padding: "10px 10px",
		margin: "0",
		maxHeight: "10",
		minHeight: "100px",
		maxWidth: "100px",
		minWidth: "100px",
		borderRadius: "0",
		fontSize: "40px"
	},
	red: {
		backgroundColor: "#e74c3c !important"
	},
	blue: {
		backgroundColor: "#3498db !important"
	}
});

function Square(props) {
	return (
		<Button
			variant="outlined"
			className={
				myStyles().myButton +
				" " +
				(props.value == null
					? myStyles().black
					: props.value === "O"
					? myStyles().red
					: myStyles().blue)
			}
			onClick={() => {
				props.onClick();
			}}
		>
			{props.value}
		</Button>
	);
}

export default Square;
