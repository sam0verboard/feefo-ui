import "styled-components";

declare module "styled-components" {
  export interface Theme {
    fonts: {
      family: {
        primary: string;
      };
      weights: {
        regular: number;
        bold: number;
      };
      size: {
        small: number;
        regular: number;
        large: number;
      };
      spacing: {
        wide: number;
      };
    };
    colors: {
      widget: string;
      dark: string;
      medium: string;
      lighter: string;
      orange: string;
    };
    spacing: {
      smallest: number;
      smaller: number;
      small: number;
      medium: number;
      large: number;
    };
  }
}
