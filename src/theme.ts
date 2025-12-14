import { Theme } from "styled-components";

export const myTheme: Theme = {
  fonts: {
    family: {
      primary: "'Poppins', sans-serif",
    },
    weights: {
      regular: 700,
      bold: 800,
    },
    spacing: {
      wide: 0.1,
    },
    size: {
      small: 0.6,
      regular: 0.8,
      large: 1,
    },
  },
  colors: {
    background: "white",
    dark: "black",
    medium: "slate",
    lighter: "lightgrey",
    orange: "#ffcb34",
  },
  spacing: {
    smallest: 0.15,
    smaller: 0.2,
    small: 0.5,
    medium: 1,
    large: 1.6,
  },
};
