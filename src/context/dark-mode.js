import { createContext, useContext, useReducer } from "react";

export const DarkModeContext = createContext();

const INTIAL_STATE = {
  isDark: false,
};

const actions = {
  TOGGLE_DARK_MODE: "TOGGLE_DARK_MODE",
};

const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case actions.TOGGLE_DARK_MODE:
      return {
        isDark: !state.isDark,
      };
    default:
      break;
  }
};

export const DarkModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INTIAL_STATE);

  const values = {
    isDark: state.isDark,
    toggleDarkMode: () => dispatch({ type: actions.TOGGLE_DARK_MODE }),
  };
  return (
    <DarkModeContext.Provider value={values}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom Hook
export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
