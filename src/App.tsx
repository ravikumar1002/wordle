import reactLogo from "./assets/react.svg";
import "./App.css";
import KeyBoard from "@components/keyBoard";
import Board from "@components/board";
import { Typography, Box, IconButton } from "@mui/material";
import BasicModal from "@components/modal";
import { useGameData } from "@context/game-context";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
// import theme from "@config/baseTheme";
import { useMemo, useState } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useAppData } from "@context/app-data-context";

function App() {
  const { gameOver } = useGameData();
  //@ts-ignore
  const { mode, setMode, appTheme } = useAppData();

  const theme = useTheme();

  const colorMode = () => {
    console.log(appTheme.palette.mode, theme.palette.mode);
    setMode((prevMode: string) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={appTheme}>
      <Box
        className="App"
        sx={{
          bgcolor: "background.default",
        }}
      >
        <Box
          sx={{
            display: "flex",
            color: "text.primary",
            padding: "0.5rem 1rem",
            marginBottom: "0.5rem",
            borderBottom: `2px solid ${
              appTheme.palette.mode === "light" ? "black" : "white"
            }`,
            boxShadow:
              appTheme.palette.mode === "light"
                ? "0px -6px 8px 11px #d3d3d3"
                : "0px -6px 8px 11px #525252",
          }}
        >
          <Typography
            variant="h3"
            component="h3"
            textAlign={"center"}
            sx={{
              color: "text.primary",
              alignSelf: "center",
              flexGrow: "1",
            }}
          >
            Wordle
          </Typography>
          <IconButton sx={{ ml: 1 }} onClick={colorMode} color="inherit">
            {appTheme.palette.mode === "dark" ? (
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
