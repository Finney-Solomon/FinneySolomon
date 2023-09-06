import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { NextUIProvider } from "@nextui-org/system";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <div className=" dark text-foreground bg-background p-8 flex items-start justify-center">
        <App />
      </div>
    </NextUIProvider>
  </React.StrictMode>
);
reportWebVitals();
