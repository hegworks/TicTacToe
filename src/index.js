import React from "react";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import ReactDOM from "react-dom";
import Game from "./components/Game";
import "./index.css";

const darkTheme = createMuiTheme({
	palette: {
		type: "dark"
	}
});

ReactDOM.render(
	<ThemeProvider theme={darkTheme}>
		<CssBaseline />
		<Game />
	</ThemeProvider>,
	document.getElementById("root")
);
