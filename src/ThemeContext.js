import { createContext, useState } from 'react';

// not necessary to pass a default argument here
// because of how its used in App.js, we set the value to useState (const theme = useState('darkblue'))
// const ThemeContext = createContext(['green', () => {}]);
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // the value of theme is the output of useState [theme, setTheme]
  const theme = useState('darkblue');
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
