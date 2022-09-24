export interface iSharedTheme {
  margin: string;
  fonts: {
    serif: string;
    primary: string;
    secondary: string;
  };
  breakpoints: {
    tablet: string;
    mobile: string;
  };
}

export interface iTheme extends iSharedTheme {
  name: 'default';
  colors: {
    primary: string;
    light: string;
    dark: string;
  };
}
