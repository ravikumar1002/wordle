import { Button, useTheme, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useGameData } from "@context/game-context";
import { useAppData } from "@context/app-data-context";

interface IKeyProps {
  keyLetter: string;
}

export const Key = (props: IKeyProps) => {
  const { keyLetter } = props;
  const {
    onSelectLetter,
    onDelete,
    onEnter,
    disableLetters,
    correctLetters,
    guessedLetters,
    currAttempt,
  } = useGameData();

  const { mode } = useAppData();

  const selectKeyLetter = () => {
    if (keyLetter === "ENTER") {
      onEnter();
    } else if (keyLetter === "CLEAR") {
      onDelete();
    } else {
      onSelectLetter(keyLetter);
    }
  };

  const getBackGroundColor = () => {
    if (disableLetters.includes(keyLetter)) {
      return "#3a393c";
    }

    if (guessedLetters.includes(keyLetter)) {
      return "#b49f39";
    }

    if (correctLetters.includes(keyLetter)) {
      return "#528d4e";
    }

    return mode === "dark" ? "#5f5f5f" : "#ebebeb";
  };

  const getEnterBorder = () => {
    if (keyLetter === "ENTER" && currAttempt.letter === 5) {
      return "2px solid black";
    }
    return "1px solid black";
  };

  const getColor = () => {
    if (
      disableLetters.includes(keyLetter) ||
      guessedLetters.includes(keyLetter) ||
      correctLetters.includes(keyLetter)
    ) {
      return "white";
    }
    return "black";
  };

  return (
    <Grid xs={1}>
      <Button
        variant="outlined"
        onClick={selectKeyLetter}
        sx={{
          backgroundColor: getBackGroundColor(),
          border: getEnterBorder(),
          color: getColor(),
          minWidth: { xs: "25px", sm: "30px", md: "40px", lg: "50px" },
          padding: {
            xs: "1.5rem 0.8rem",
            sm: "1.5rem 1rem",
            md: "0.5rem 1rem",
          },
          "&:hover": {
            color: "palette.action.active",
            background: getBackGroundColor(),
          },
        }}
      >
          {keyLetter}
      </Button>
    </Grid>
  );
};
