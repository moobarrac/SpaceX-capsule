import React, { useState } from 'react';

const SpaceContext = React.createContext();

const SpaceProvider = ({children}) => {
  
  return (
    <SpaceContext.Provider value={{}}>
      {children}
    </SpaceContext.Provider>
  );
}

export { SpaceContext, SpaceProvider };