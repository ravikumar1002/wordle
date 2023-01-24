import { AppDataProvider } from "@context/app-data-context";
import { GameDataProvider } from "@context/game-context";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppDataProvider>
      <GameDataProvider>
        <App />
      </GameDataProvider>
    </AppDataProvider>
  </React.StrictMode>
);
