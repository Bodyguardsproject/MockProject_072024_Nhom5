import React from "react";
import ReactDOM from "react-dom/client";
import { StyleProvider } from "@ant-design/cssinjs";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <StyleProvider hashPriority="high">
        <App />
      </StyleProvider>
    </React.StrictMode>
  </BrowserRouter>
);
