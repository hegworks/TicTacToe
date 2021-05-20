import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const myStyles = makeStyles({
	myButton: {
		padding: "10px 10px",
		margin: "0",
		maxHeight: "10vw",
		minHeight: "10vw",
		maxWidth: "10vw",
		minWidth: "10vw",
		borderRadius: "0",
		fontSize: "50px",
		"@media(max-Width: 700px)": {
			maxHeight: "25vw",
			minHeight: "25vw",
			maxWidth: "25vw",
			minWidth: "25vw"
		}
	}
});

function Square(props) {
	return (
		<Button
			variant="outlined"
			className={myStyles().myButton}
			onClick={() => {
				props.onClick();
			}}
		>
			{props.value}
		</Button>
	);
}

export default Square;
