// src/app/theme.js
import { createTheme } from "@mui/material/styles";

// Definiere die Theme-Optionen
export const themeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#3478F6",
      contrastText: "#000000",
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

// Erstelle das Theme mit den Optionen
const theme = createTheme(themeOptions);

export default theme;
