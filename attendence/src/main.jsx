import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./globals.css";
import "@fontsource/space-grotesk"; // or import "@expo-google-fonts/space-grotesk";

import { BrowserRouter } from "react-router-dom";
import GlobalcontextProvider from "./context/context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalcontextProvider>
        <App />
      </GlobalcontextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
