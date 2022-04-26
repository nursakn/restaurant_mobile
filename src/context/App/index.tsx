import React, {createContext, ReactNode} from 'react';
import modules from 'modules/index';

export const AppContext = createContext(modules);

type Props = {
  children: ReactNode;
};

const AppContextProvider: React.FC<Props> = ({children}) => {
  return (
    <AppContext.Provider
      value={{
        services: modules.services,
        repositories: modules.repositories,
        stores: modules.stores,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
