import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { App } from "./components/App";
import "./styles/scss/style.scss";
import "./styles/scss/spinner.scss";
import "./styles/scss/tooltip.scss";
import "./styles/scss/media.scss";

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
