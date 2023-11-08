import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { App } from "./components/App";
import "./styles/css/fontello.css";
import "./styles/css/style.css";
import "./styles/css/spinner.css";
import "./styles/css/tooltip.css";
import "./styles/css/media.css";

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
