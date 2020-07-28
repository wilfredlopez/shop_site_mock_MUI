import {
  createStyles,
  makeStyles,
  Paper,
  Theme,
  Toolbar,
} from "@material-ui/core";
import React from "react";
import IndexPage from "./components/IndexPage";
import Header from "./components/layout/Header";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    spacingToolbar: {
      minHeight: 0,
      marginBottom: theme.spacing(3),
      [theme.breakpoints.up("md")]: {
        marginBottom: theme.spacing(4),
      },
    },
    rootPaper: {
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingTop: 20,
      [theme.breakpoints.up("md")]: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
      },
    },
  })
);

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Header />
      <Toolbar
        id="back-to-top-anchor"
        className={classes.spacingToolbar}
      />
      <Paper className={classes.rootPaper} square elevation={0}>
        <IndexPage />
      </Paper>
    </div>
  );
}

export default App;
