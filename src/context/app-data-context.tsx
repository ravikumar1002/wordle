import { createContext, useContext, useState } from "react";
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

interface IAppDataContextState {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
}

export const appDataContext = createContext<IAppDataContextState | null>(null);

interface IAppDataProps {
  children: React.ReactNode;
}

const AppDataProvider = (props: IAppDataProps) => {
  const { children } = props;
  const [mode, setMode] = useState<string>("light");

  const theme = createTheme({
    palette: {
        mode: mode,
    },
})


  return (
    <appDataContext.Provider value={{ mode, setMode , theme}}>
      {children}
    </appDataContext.Provider>
  );
};

const useAppData = () => {
  const context = useContext(appDataContext);
  if (!context) throw new Error("Not Context");
  return context;
};

export { useAppData, AppDataProvider };
