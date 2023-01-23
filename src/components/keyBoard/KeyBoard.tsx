import { Key } from "./Key";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { useCallback, useEffect } from "react";
import { useAppData } from "@context/app-context";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const KeyBoard = () => {
  const row1Keys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2Keys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row3Keys = ["Z", "X", "C", "V", "B", "N", "M"];
  const row4Keys = ["BACK", "ENTER"];

  const {
    onSelectLetter,
    currAttempt,
    onEnter,
    onDelete,
  } = useAppData();

  const handleKeyboard = useCallback(
    (event: any) => {
      console.log(currAttempt)
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else if (/^[A-Za-z]$/.test(event.key)) {
        row1Keys.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        row2Keys.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        row3Keys.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        row4Keys.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      } else {
        console.log("please entre valid key");
      }
    },
    [currAttempt]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, sm: 2,}}
        columns={{ xs: 11, sm: 16, md: 22, lg: 22 }}
        sx={{
          justifyContent: "center",
        }}
      >
        {row1Keys.map((key) => {
          return <Key keyLetter={key} key={key} />;
        })}
      </Grid>
      <Grid
        container
        spacing={2}
        columns={{ xs: 11, sm: 16, md: 21 , lg: 22}}
        sx={{
          justifyContent: "center",
        }}
      >
        {row2Keys.map((key) => {
          return <Key keyLetter={key} key={key} />;
        })}
      </Grid>
      <Grid
        container
        spacing={2}
        columns={{ xs: 11, sm: 16, md: 22 , lg: 22}}
        sx={{
          justifyContent: "center",
        }}
      >
        {row3Keys.map((key) => {
          return <Key keyLetter={key} key={key} />;
        })}
      </Grid>
      <Grid
        container
        spacing={2}
        columns={{ xs: 7, sm: 9, md: 13 }}
        sx={{
          justifyContent: "center",
        }}
      >
        {row4Keys.map((key) => {
          return <Key keyLetter={key} key={key} />;
        })}
      </Grid>
    </Box>
  );
};

export default KeyBoard;
