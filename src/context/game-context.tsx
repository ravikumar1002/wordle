import { createContext, useContext, useState, useEffect } from "react";
import { boardDefaultValue, generateWordSet } from "@utils/words";
import Alert from '@mui/material/Alert';

interface ICurrAttempt {
  attempt: number;
  letter: number;
}

interface IGameOver {
  gameOver: boolean;
  guessedWord: boolean;
}

export interface IGameDataContextState {
  onSelectLetter: (key: string) => void;
  onDelete: () => void;
  onEnter: () => void;
  onRetry: () => void;
  currAttempt: ICurrAttempt;
  setCurrAttempt: React.Dispatch<React.SetStateAction<ICurrAttempt>>;
  board: string[][];
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>;
  wordSet: string[];
  setWordSet: React.Dispatch<React.SetStateAction<string[]>>;
  correctWord: string;
  setCorrectWord: React.Dispatch<React.SetStateAction<string>>;
  gameOver: IGameOver;
  setGameOver: React.Dispatch<React.SetStateAction<IGameOver>>;
  disableLetters: string[];
  setDisableLetters: React.Dispatch<React.SetStateAction<string[]>>;
  guessedLetters: string[];
  setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>;
  correctLetters: string[];
  setCorrectLetters: React.Dispatch<React.SetStateAction<string[]>>;
}

interface IGameDataProvider {
  children: React.ReactNode;
}

export const gameDataContext = createContext<IGameDataContextState | null>(null);

const GameDataProvider = (props: IGameDataProvider) => {
  const { children } = props;

  const [currAttempt, setCurrAttempt] = useState<ICurrAttempt>({
    attempt: 0,
    letter: 0,
  });
  const [board, setBoard] = useState<string[][]>([...boardDefaultValue]);
  const [wordSet, setWordSet] = useState<string[]>([]);
  const [disableLetters, setDisableLetters] = useState<string[]>([]);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [correctWord, setCorrectWord] = useState<string>("");
  const [gameOver, setGameOver] = useState<IGameOver>({
    gameOver: false,
    guessedWord: false,
  });

  const onSelectLetter = (key: string) => {
    if (currAttempt.letter > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter] = key;
    setBoard(newBoard);
    setCurrAttempt({
      attempt: currAttempt.attempt,
      letter: currAttempt.letter + 1,
    });
  };

  const onDelete = () => {
    if (currAttempt.letter === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
  };

  const onEnter = () => {
    if (currAttempt.letter !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }

    if (wordSet.includes(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
    } else {
      <Alert icon={false} severity="success">
        This is a success alert — check it out!
      </Alert>
    }

    if (currWord.toLowerCase() === correctWord.toLowerCase()) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }

    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
  };

  const onRetry = () => {
    setGameOver({
      gameOver: false,
      guessedWord: false,
    });
    setBoard([
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ]);
    setGuessedLetters([]);
    setDisableLetters([]);
    setCorrectLetters([]);
    generateWordSet().then((words) => {
      setWordSet(words?.wordSet);
      setCorrectWord(words?.todaysWord);
    });
    setCurrAttempt({ attempt: 0, letter: 0 });
  };

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words?.wordSet);
      setCorrectWord(words?.todaysWord);
    });
  }, []);

  return (
    <gameDataContext.Provider
      value={{
        onSelectLetter,
        onDelete,
        onEnter,
        currAttempt,
        setCurrAttempt,
        board,
        setBoard,
        wordSet,
        setWordSet,
        gameOver,
        setGameOver,
        correctWord,
        setCorrectWord,
        disableLetters,
        setDisableLetters,
        guessedLetters,
        setGuessedLetters,
        correctLetters,
        setCorrectLetters,
        onRetry,
      }}
    >
      {children}
    </gameDataContext.Provider>
  );
};

const useGameData = () => {
  const context = useContext(gameDataContext);
  if (!context) throw new Error("Not Context");
  return context;
};

export { useGameData, GameDataProvider };
