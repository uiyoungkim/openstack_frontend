"use client";
import "./globals.css";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import Header from "./components/Header";
import Box from "@mui/material/Box";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header /> {/* Header-Component : Navbar*/}
          <Box
            sx={{
              maxWidth: "1600px",
              margin: "0 auto",
              padding: { xs: "0 16px", md: "0 32px" },
            }}
          >
            {children}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
