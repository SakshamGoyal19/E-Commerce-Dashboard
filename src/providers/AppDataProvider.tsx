import { createContext, useState, useCallback } from 'react';

const init: IAppData = {
  darkMode: false,
};

export const AppDataContext = createContext<IAppDataValues>({
  appData: init,
  updateAppData: () => {},
});

const AppDataProvider = ({ children }: any) => {
  const [data, setData] = useState<IAppData>(init);

  const setAppData = useCallback(
    (updateData: IAppData) => {
      setData({
        ...data,
        ...updateData,
      });
    },
    [data],
  );

  return (
    <AppDataContext.Provider
      value={{ appData: data, updateAppData: setAppData }}
    >
      {children}
    </AppDataContext.Provider>
  );
};

interface IAppDataValues {
  appData: IAppData;
  updateAppData: (updateData: IAppData) => void;
}

export interface IAppData {
  darkMode: boolean;
}

export default AppDataProvider;
