import {
  PaletteColorOptions,
} from "@material-ui/core/styles";

declare module "@material-ui/core/styles/createPalette" {
  export interface PaletteOptions {
    danger?: PaletteColorOptions;
    option?: PaletteColorOptions;
  }

  export interface Palette {
    danger?: PaletteColor;
  }
  export default function createPalette(palette: PaletteOptions): Palette;
}
