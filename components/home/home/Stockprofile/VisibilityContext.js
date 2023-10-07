import React, { createContext, useContext, useState } from 'react';

const VisibilityContext = createContext();

export const useVisibility = () => {
  return useContext(VisibilityContext);
};

export const VisibilityProvider = ({ children }) => {
  const [isViewVisible, setViewVisible] = useState(false);

  const toggleViewVisibility = () => {
    setViewVisible(!isViewVisible);
  };

  return (
    <VisibilityContext.Provider value={{ isViewVisible, toggleViewVisibility }}>
      {children}
    </VisibilityContext.Provider>
  );
};
