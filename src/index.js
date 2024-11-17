import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import App from "./App";

// Create a root element using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
