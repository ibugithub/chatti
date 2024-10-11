import { createContext, useContext, useReducer, useEffect } from "react";
const stateContext = createContext();

export const StateProvider = ({ initialState, reducer, children }) => {
  return (
    <stateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </stateContext.Provider>
  );
};

export const useStateProvider = () => useContext(stateContext);
