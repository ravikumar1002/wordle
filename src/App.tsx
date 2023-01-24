import reactLogo from "./assets/react.svg";
import "./App.css";
import KeyBoard from "@components/keyBoard";
import Board from "@components/board";
import { Typography, Box, IconButton } from "@mui/material";
import BasicModal from "@components/modal";
import { useGameData } from "@context/game-context";
import { createTheme, ThemeProvider } from "@mui/material";
// import theme from "@config/baseTheme";
import { useMemo, useState } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useAppData } from "@context/app-data-context";

function App() {
  const { gameOver } = useGameData();
  const { mode, setMode, theme } = useAppData();
  const appTheme = createTheme(theme);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: string) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  return (
    <ThemeProvider theme={appTheme}>
      <Box
        className="App"
        sx={{
          bgcolor: "background.default",
        }}
      >
        <Box sx={{
          display: "flex"
        }}>
          <Typography variant="h2" component="h2" textAlign={"center"} sx={{
            color: "text.primary",
            alignSelf: "center",
            flexGrow: "1",
          }}>
            Wordle
          </Typography>
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Box>

        <Board />
        <KeyBoard />
        {gameOver.gameOver && <BasicModal />}
      </Box>
    </ThemeProvider>
  );
}

export default App;
