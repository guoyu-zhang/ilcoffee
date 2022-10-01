import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

theme.typography.h4 = {
  textAlign: "center",
  fontSize: 32,
  lineHeight: 2,
  fontWeight: 300,
  fontFamily:
    // eslint-disable-next-line max-len
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  marginBottom: "0.2em",
  "&:after": {
    content: '""',
    width: 24,
    height: 2,
    backgroundColor: "#ddd",
    display: "block",
    margin: "8px auto",
    borderRadius: 2,
  },
};

const store = configureStore({ reducer: reducers });
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
