import React, { PropsWithChildren } from "react";
import {
  ThemeProvider as MaterialThemeProvider,
  CssBaseline,
} from "@material-ui/core";
import { theme } from "./theme";
export interface IThemeProviderProps extends PropsWithChildren<{}> {
}

export class ThemeProvider extends React.Component<IThemeProviderProps> {
  public render() {
    return (<MaterialThemeProvider theme={theme}>
      <CssBaseline />
      {this.props.children}
    </MaterialThemeProvider>);
  }
}
