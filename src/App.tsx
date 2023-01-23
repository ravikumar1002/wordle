import reactLogo from "./assets/react.svg";
import "./App.css";
import KeyBoard from "@components/keyBoard";
import Board from "@components/board";
import { Typography } from "@mui/material";
import BasicModal from "@components/modal";
import { useAppData } from "@context/app-context";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const { gameOver } = useAppData();
  const theme = createTheme(baseTheme);

  return (
    <div className="App">
      <Typography variant="h2" component="h2" textAlign={"center"}>
        Wordle
      </Typography>
      <Board />
      <KeyBoard />
      {gameOver.gameOver && <BasicModal />}
    </div>
  );
}

export default App;
