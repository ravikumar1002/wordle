import reactLogo from "./assets/react.svg";
import "./App.css";
import KeyBoard from "@components/keyBoard";
import Board from "@components/board";
import { Typography } from "@mui/material";
import { generateWordSet } from "utils/words";
import { useEffect } from "react";
import BasicModal from "@components/modal/Modal";

function App() {
  return (
    <div className="App">
      <Typography variant="h2" component="h2" textAlign={"center"}>
        Wordle
      </Typography>
      <Board />
      <KeyBoard />
      <BasicModal />
    </div>
  );
}

export default App;
