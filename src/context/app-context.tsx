import { createContext, useContext, useState, useEffect } from "react";
import { boardDefaultValue } from "utils/words";

export interface IAppDataContextState {
  onSelectLetter: (key: string) => void;
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
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter] = key;
    setBoard(newBoard);
    console.log(newBoard, "newBoard")
    setCurrAttempt({
      attempt: currAttempt.attempt,
      letter: currAttempt.letter + 1,
    });
  };

  return (
    <appDataContext.Provider
      value={{ onSelectLetter, currAttempt, setCurrAttempt }}
    >
      {children}
    </appDataContext.Provider>
  );
};

const useAppData = () => useContext(appDataContext);

export { useAppData, AppDataProvider };
