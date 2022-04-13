import { ThemeProvider } from "contexts";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
