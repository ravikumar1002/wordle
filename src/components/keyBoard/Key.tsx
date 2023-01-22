import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useAppData } from "../../context/app-context";

interface IKeyProps {
  keyLetter: string;
  // disabled?: boolean;
  // guessed?: boolean;
  // correct?: boolean;
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
  } = useAppData();
  // disabled={disableLetters.includes(key)}
  // guessed={guessedLetters.includes(key)}
  // correct={correctLetters.includes(key)}
  const selectKeyLetter = () => {
    if (keyLetter === "ENTER") {
      onEnter();
    } else if (keyLetter === "BACK") {
      onDelete();
    } else {
      onSelectLetter(keyLetter);
    }
  };

  const getKeyStyle = () => {
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

  return (
    <Grid xs={1}>
      <Button
        variant="outlined"
        onClick={selectKeyLetter}
        sx={{
          backgroundColor: getKeyStyle(),
        }}
      >
        {keyLetter}
      </Button>
    </Grid>
  );
};
