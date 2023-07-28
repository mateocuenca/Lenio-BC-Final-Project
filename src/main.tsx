//External dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "jotai";

//Internal dependencies
import App from "./App.tsx";

//Stylesheets
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
