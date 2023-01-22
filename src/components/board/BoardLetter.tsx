import { useEffect } from "react";
import { useAppData } from "../../context/app-context";

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
  } = useAppData();

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
      setDisableLetters((prev: string[]) => [...prev, letter]);
    } else if (letter !== "" && correct) {
      setCorrectLetters((prev: string[]) => [...prev, letter]);
    } else if (letter !== "" && guessed) {
      setGuessedLetters((prev: string[]) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <div className="letter" id={keyStyle === false ? "" : keyStyle}>
      {letter}
    </div>
  );
};

export default BoardLetter;
