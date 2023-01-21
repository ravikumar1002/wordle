import { createContext, useContext, useState, useEffect } from "react";
import { boardDefaultValue, generateWordSet } from "../utils/words";

interface ICurrAttempt {
  attempt: number;
  letter: number;
}

interface IGameOver {
  gameOver: boolean;
  guessedWord: boolean;
}

export interface IAppDataContextState {
  onSelectLetter: (key: string) => void;
  onDelete: () => void;
  onEnter: () => void;
  currAttempt: ICurrAttempt;
  setCurrAttempt: React.Dispatch<React.SetStateAction<ICurrAttempt>>;
  board: string[][];
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>;
  wordSet: Set<unknown>;
  setWordSet: React.Dispatch<React.SetStateAction<Set<unknown>>>;
  correctWord: string;
  setCorrectWord: React.Dispatch<React.SetStateAction<string>>;
  gameOver: IGameOver;
  setGameOver: React.Dispatch<React.SetStateAction<IGameOver>>;
}

interface IAppDataProvider {
  children: React.ReactNode;
}

export const appDataContext = createContext<IAppDataContextState | null>(null);

const AppDataProvider = (props: IAppDataProvider) => {
  const { children } = props;

  const [currAttempt, setCurrAttempt] = useState<ICurrAttempt>({
    attempt: 0,
    letter: 0,
  });
  const [board, setBoard] = useState<string[][]>(boardDefaultValue);
  const [wordSet, setWordSet] = useState(new Set());
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
    console.log(newBoard, "newBoard");
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
    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
    } else {
      console.log("Word not found");
    }

    if (currWord === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }
    console.log(currAttempt);
    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
  };

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words?.wordSet);
      setCorrectWord(words?.todaysWord);
    });
  }, []);

  return (
    <appDataContext.Provider
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
      }}
    >
      {children}
    </appDataContext.Provider>
  );
};

const useAppData = () => useContext(appDataContext);

export { useAppData, AppDataProvider };
