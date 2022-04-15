import { NoteProvider, ThemeProvider, UserProvider } from "contexts";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <NoteProvider>
      <UserProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </UserProvider>
    </NoteProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
