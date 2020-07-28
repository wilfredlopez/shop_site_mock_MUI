import red from "@material-ui/core/colors/red";
import secondary from "@material-ui/core/colors/orange";
import common from "@material-ui/core/colors/common";
import gray from "@material-ui/core/colors/grey";
import secondaryAlter from "@material-ui/core/colors/deepPurple";
import { createMuiTheme } from "@material-ui/core/styles";

const { black, white } = common;

function getTheme(type: "dark" | "light") {
  const primaryColor = type === "light" ? "#ad476e" : "#e7e7e7"; //primary["800"] : primary["900"];
  const secondaryColor = type === "light"
    ? secondary["900"]
    : secondaryAlter["200"];

  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        "Lato",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
    palette: {
      type: type,
      primary: {
        // ...primary,
        main: primaryColor,
        contrastText: type === "light" ? white : black,
        light: "#e1769c",
        dark: "#7a1443",
      },
      secondary: {
        ...secondary,
        main: secondaryColor,
        contrastText: black,
      },
      danger: {
        main: red.A400,
      },
      error: {
        main: red.A400,
      },
      background: {
        // default: type === "light" ? white : black,
        paper: type === "dark" ? gray["700"] : gray["100"],
      },
    },
    shape: {
      borderRadius: 2,
    },
    spacing: 10,
    props: {
      MuiPaper: {
        elevation: 3,
      },
      MuiTextField: {
        InputLabelProps: {
          shrink: true,
        },
      },
      MuiButton: {
        disableRipple: true,
        variant: "contained",
      },
      MuiCheckbox: {
        disableRipple: true,
      },
    },
    overrides: {
      MuiToolbar: {
        gutters: {
          minHeight: 20,
          "@media (min-width: 600px)": {
            minHeight: 20,
          },
        },
        regular: {
          minHeight: 20,
          "@media (min-width: 600px)": {
            minHeight: 20,
          },
        },
        root: {
          minHeight: 20,
          "@media (min-width: 600px)": {
            minHeight: 20,
          },
        },
      },
      MuiFilledInput: {
        root: {
          backgroundColor: "transparent",
        },
      },
      MuiInputLabel: {
        root: {
          backgroundColor: "transparent",
        },
      },
      MuiButton: {
        root: {
          textTransform: "none",
        },
      },
    },
  });

  theme.typography.h1 = {
    fontSize: "2.2rem",
    "@media (min-width:600px)": {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "3.4rem",
    },
  };

  theme.typography.h2 = {
    fontSize: "1rem",
    "@media (min-width:600px)": {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.6rem",
    },
  };

  return theme;
}

// A custom theme for this app
const theme = getTheme("light");
export { theme };
