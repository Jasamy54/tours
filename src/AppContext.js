import React, { useState, createContext, useContext } from 'react';
const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [readMore, setReadMore] = useState(false);

  return (
    <AppContext.Provider
      value={{readMore, setReadMore}}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };