import { createContext, useContext, useState, useMemo } from "react";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

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

  const appTheme = useMemo(
    () =>
      createTheme({
        palette: {
          //@ts-ignore
          mode: mode,
        },
      }),
    [mode]
  );

  return (
    //@ts-ignore
    <appDataContext.Provider value={{ mode, setMode, appTheme }}>
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
