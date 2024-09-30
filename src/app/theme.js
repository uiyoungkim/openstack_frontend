import { createTheme } from "@mui/material/styles";

// Our custom theme from Figma Prototype
export const themeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#3478F6",
      contrastText: "#000000",
      dark: "#2b67cc",
    },
    secondary: {
      main: "#E0DFDE",
      contrastText: "#000000",
    },
    divider: "#808080",
    text: {
      primary: "rgb(0, 0, 0)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgb(128, 128, 128)",
    },
    background: {
      default: "#ffffff",
    },
  },
};

// Todo: if we have much time, we can add dark mode
const theme = createTheme(themeOptions);

export default theme;
