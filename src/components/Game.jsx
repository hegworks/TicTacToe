import React, { Component } from "react";
import Board from "./Board";
import {
	List,
	ListItem,
	ListItemText,
	ListSubheader,
	Divider,
	Typography,
	withStyles
} from "@material-ui/core";

/**
 * CSS
 */
const styles = theme => ({
	wholeDiv: {
		margin: "0"
	},

	wholeFlexContainer: {
		margin: "0",
		display: "flex",
		justifyContent: "center",
		textAlign: "center",
		"@media(max-Width: 700px)": {
			flexDirection: "column",
			justifyContent: "center",
			textAlign: "center"
		}
	},

	boardAndStatusFlexContainer: {
		display: "flex",
		flexDirection: "column",
		marginTop: "10px"
		// alignContent: "center",
	},

	title: {
		// whiteSpace: "pre",
		textAlign: "center",
		fontSize: "100px",
		marginTop: "10px",
		marginBottom: "10px",
		"@media(max-Width: 700px)": {
			fontSize: "50px"
		}
	},

	subtitle: {
		// whiteSpace: "pre",
		fontSize: "50px",
		marginTop: "0",
		marginBottom: "0",
		"@media(max-Width: 700px)": {
			fontSize: "25px"
		}
	},

	divider: {
		marginBottom: "10px",
		width: "500px",
		textAlign: "center",
		marginLeft: "auto",
		marginRight: "auto",
		"@media(max-Width: 700px)": {
			width: "100%"
		}
	},

	statusText: {
		whiteSpace: "pre"
		// textAlign: "center"
	},

	board: {},

	list: {
		backgroundColor: theme.palette.background.paper,
		marginLeft: "10px",
		marginTop: "10px",
		"@media(max-Width: 700px)": {
			width: "300px",
			margin: "auto",
			marginTop: "10px"
		}
		// fontSize: "100px"
	},

	listItem: {},

	listItemText: {
		textAlign: "center"
	}
});

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

		if (!squares[i] && !calculateWinner(squares)) {
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
		const { classes } = this.props;

		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const winner = calculateWinner(current.squares);

		const moves = history.map((step, move) => {
			const desc = move ? "Go to move #" + move : "Go to game start";
			return (
				<div>
					<Divider />
					<ListItem classname={classes.listItem} key={move} button>
						<ListItemText
							classname={classes.listItemText}
							onClick={() => this.jumpTo(move)}
							primary={desc}
						></ListItemText>
					</ListItem>
				</div>
			);
		});

		let status;
		if (!winner && this.state.stepNumber === 9) {
			status = "Draw!";
		} else {
			status = winner
				? winner + " Won!"
				: (status = this.state.xIsNext ? "X\t<====\tO" : "X\t====>\tO");
		}
		return (
			<div classmae={classes.wholeDiv}>
				<Typography
					variant="h1"
					flexItem="true"
					className={classes.title}
				>
					Tic Tac Toe
					<Typography
						variant="subtitle1"
						className={classes.subtitle}
					>
						by HEGworks
					</Typography>
				</Typography>

				<Divider className={classes.divider} variant="middle" />

				<div className={classes.wholeFlexContainer}>
					<div className={classes.boardAndStatusFlexContainer}>
						<Typography variant="h4" className={classes.statusText}>
							{status}
						</Typography>

						<Board
							className={classes.board}
							sqrVals={current.squares}
							handleClick={i => this.handleClick(i)}
						/>
					</div>
					<List
						className={classes.list}
						subheader={<ListSubheader>History</ListSubheader>}
					>
						{moves}
					</List>
				</div>
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

export default withStyles(styles)(Game);
