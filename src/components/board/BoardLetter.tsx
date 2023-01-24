import { useEffect } from "react";
import { useGameData } from "@context/game-context";
import { Box, Typography } from "@mui/material";

interface IBoardLetterProps {
  letterPos: number;
  attemptVal: number;
}

const BoardLetter = (props: IBoardLetterProps) => {
  const {
    board,
    currAttempt,
    correctWord,
    setDisableLetters,
    setCorrectLetters,
    setGuessedLetters,
  } = useGameData();

  const { letterPos, attemptVal } = props;

  const letter = board[attemptVal][letterPos];

  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const guessed =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const keyStyle =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : guessed ? "guessed" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !guessed) {
      setDisableLetters((prev: string[]) => [...new Set([...prev, letter])]);
    } else if (letter !== "" && correct) {
      setCorrectLetters((prev: string[]) => [...new Set([...prev, letter])]);
    } else if (letter !== "" && guessed) {
      setGuessedLetters((prev: string[]) => [...new Set([...prev, letter])]);
    }
  }, [currAttempt.attempt]);

  const getNextFillBorder = () => {
    if (
      attemptVal === currAttempt.attempt &&
      letterPos === currAttempt.letter
    ) {
      return "2px solid palette.action.selected";
    }
    return "1px solid palette.divider";
  };

  return (
    <Box
      className="letter"
      id={keyStyle === false ? "" : keyStyle}
      sx={{
        border: getNextFillBorder(),
        color: "text.primary",
      }}
    >
      <Typography
        variant="h5"
        align="center"
      >
        {letter}
      </Typography>
    </Box>
  );
};

export default BoardLetter;
