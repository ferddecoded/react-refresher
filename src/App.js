import { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import {ThemeProvider}  from './ThemeContext';
import Details from './Details';
import SearchParams from './SearchParams';

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Router>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
