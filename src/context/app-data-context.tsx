import { createContext } from "react";


interface IAppDataContextState {

}

export const appDataContext = createContext<IAppDataContextState | null>(null);
