import React from "react";
import ReactDOM from "react-dom/client";
import HamburgerProvider from "./context/hamburger.provider";
import App from "./App";
import "./global-styles/style.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HamburgerProvider>
      <App />
    </HamburgerProvider>
  </React.StrictMode>
);
