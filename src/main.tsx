import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root") ?? document;

const root = ReactDOM.hydrateRoot(
  container,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

root.render;
