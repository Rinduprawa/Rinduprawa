import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter> {/* Router cukup di sini */}
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
