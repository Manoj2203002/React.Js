import React, { createContext } from 'react';
import Child1 from './useContext/child1';

// Creating contexts
const NameContext = createContext();
const AgeContext = createContext();

const App = () => {
  const name = "Manoj";
  const age = "23";

  return (
    <div>
      <AgeContext.Provider value={age}>
        <NameContext.Provider value={name}>
          <Child1 />
        </NameContext.Provider>
      </AgeContext.Provider>
    </div>
  );
};

export default App;
export { NameContext, AgeContext };
