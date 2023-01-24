import reactLogo from "./assets/react.svg";
import "./App.css";
import KeyBoard from "@components/keyBoard";
import Board from "@components/board";
import { Typography } from "@mui/material";
import BasicModal from "@components/modal";
import { useGameData } from "@context/game-context";
import { createTheme, ThemeProvider } from "@mui/material";
import theme from "@config/baseTheme";
import { useMemo, useState } from "react";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function App() {
  const { gameOver } = useGameData();
  const appTheme = createTheme(theme);

  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  return (
    <ThemeProvider theme={appTheme}>
      <div className="App">
        <Box>
        <Typography variant="h2" component="h2" textAlign={"center"}>
          Wordle
        </Typography>
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
        </Box>
       
        <Board />
        <KeyBoard />
        {gameOver.gameOver && <BasicModal />}
      </div>
    </ThemeProvider>
  );
}

export default App;
