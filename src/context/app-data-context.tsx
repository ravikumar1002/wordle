import { createContext, useContext, useState, useMemo } from "react";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

import { PaletteMode, Theme } from "@mui/material";
interface IAppDataContextState {
  mode: PaletteMode;
  setMode: React.Dispatch<React.SetStateAction<PaletteMode>>;
  appTheme: Theme;
}

export const appDataContext = createContext<IAppDataContextState | null>(null);

interface IAppDataProps {
  children: React.ReactNode;
}

const AppDataProvider = (props: IAppDataProps) => {
  const { children } = props;
  const [mode, setMode] = useState<PaletteMode>("light");

  const appTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
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
