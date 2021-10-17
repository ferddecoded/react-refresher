import { createContext } from 'react';

// not necessary to pass a default argument here
// because of how its used in App.js, we set the value to useState (const theme = useState('darkblue'))
// const ThemeContext = createContext(['green', () => {}]);
const ThemeContext = createContext();

export default ThemeContext;
