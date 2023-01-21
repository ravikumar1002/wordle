import { createContext, useContext, useState, useEffect } from "react";
import { boardDefaultValue } from "utils/words";

export interface IAppDataContextState {
  onSelectLetter: (key: string) => void;
  onDelete: () => void;
  currAttempt: {
    attempt: number;
    letter: number;
  };
  setCurrAttempt: React.Dispatch<
    React.SetStateAction<{
      attempt: number;
      letter: number;
    }>
  >;
  board: string[][];
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>;
}
interface IAppDataProvider {
  children: React.ReactNode;
}

export const appDataContext = createContext<IAppDataContextState | null>(null);

const AppDataProvider = (props: IAppDataProvider) => {
  const { children } = props;

  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  const [board, setBoard] = useState<string[][]>(boardDefaultValue);

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

  return (
    <appDataContext.Provider
      value={{
        onSelectLetter,
        onDelete,
        currAttempt,
        setCurrAttempt,
        board,
        setBoard,
      }}
    >
      {children}
    </appDataContext.Provider>
  );
};

const useAppData = () => useContext(appDataContext);

export { useAppData, AppDataProvider };
