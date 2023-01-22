import React, { useState, createContext } from 'react';
const AppContext = createContext();

export function AppProvider({ children }) {
  
  const [readMore, setReadMore] = useState(false);

  return (
    <AppContext.Provider
      value={{readMore, setReadMore}}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use


export default AppContext;