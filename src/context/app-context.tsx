import { createContext, useContext, useState, useEffect } from "react";

interface IAppDataProvider {
  children: React.ReactNode;
}

export const appDataContext = createContext({});

const AppDataProvider = (props: IAppDataProvider) => {
  const { children } = props;
  return (
    <appDataContext.Provider value={{}}>{children}</appDataContext.Provider>
  );
};

const useAppData = () => useContext(appDataContext);

export { useAppData, AppDataProvider };
