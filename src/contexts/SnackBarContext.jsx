import React, { createContext, useState } from 'react';

const SnackBarProvider = (props) => {
  const [state, setState] = useState({});
  return (
    <div>
      <AppContext.Provider value={[state, setState]}>
        {props.children}
      </AppContext.Provider>
    </div>
  );
};

export default SnackBarProvider;
export const AppContext = createContext();
