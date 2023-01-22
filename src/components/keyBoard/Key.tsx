import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useAppData } from "../../context/app-context";

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
  } = useAppData();

  const selectKeyLetter = () => {
    if (keyLetter === "ENTER") {
      onEnter();
    } else if (keyLetter === "BACK") {
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

    return "inherit";
  };

  const getEnterBorder = () => {
    if (keyLetter === "ENTER" && currAttempt.letter === 5) {
      return "2px solid black";
    }
    return "1px solid black";
  };

  return (
    <Grid xs={1}>
      <Button
        variant="outlined"
        onClick={selectKeyLetter}
        sx={{
          backgroundColor: getBackGroundColor(),
          border: getEnterBorder(),
        }}
      >
        {keyLetter}
      </Button>
    </Grid>
  );
};
