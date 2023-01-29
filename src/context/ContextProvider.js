import React, { useState } from 'react';

const SpaceContext = React.createContext();

const SpaceProvider = ({children}) => {
  const [filters, setFilters] = useState({status: '', date: '', type: ''})
  
  return (
    <SpaceContext.Provider value={{filters, setFilters}}>
      {children}
    </SpaceContext.Provider>
  );
}

export { SpaceContext, SpaceProvider };