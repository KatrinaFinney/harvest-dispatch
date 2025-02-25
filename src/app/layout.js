"use client";

import "./globals.css"; // optional global styles if you created them
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";  // <-- Import Box here

import { Montserrat, Roboto } from "next/font/google";

// Import shared layout components
import Header from "../components/Header";
import Footer from "../components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

// Create a dark mode theme with a unified blue background
const theme = createTheme({
  palette: {
    mode: "dark", // Dark mode enabled
    primary: {
      main: "#001F3F", // Navy color for the primary button
    },
    secondary: {
      main: "#FFD700", // Rich gold color for buttons, highlights
    },
    background: {
      default: "#0A1C2C", // Deep blue as default background
      paper: "#1E1E1E", // Darker background for cards, sections
    },
    text: {
      primary: "#FFFFFF", // White text for better contrast
      secondary: "#B0B0B0", // Light gray for secondary text
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 700,
      textTransform: "uppercase",
    },
    h2: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 700,
      textTransform: "uppercase",
    },
    h3: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 700,
      textTransform: "uppercase",
    },
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          {/* Ensure the background color is consistent across the site */}
          <Box sx={{ backgroundColor: theme.palette.background.default }}>
            {children}
          </Box>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
