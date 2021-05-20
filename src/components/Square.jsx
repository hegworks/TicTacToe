import React, { useState } from "react";
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
		"@media(max-Width: 700px)": {
			maxHeight: "25vw",
			minHeight: "25vw",
			maxWidth: "25vw",
			minWidth: "25vw"
		}
	}
});

function Square(props) {
	// const styleClasses = myStyles();
	const [value, setValue] = useState();
	return (
		<Button
			variant="outlined"
			className={myStyles().myButton}
			onClick={() => {
				setValue(props.value);
			}}
		>
			{value}
		</Button>
	);
}

export default Square;
