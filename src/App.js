import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  StylesProvider,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home/Home';
import Auth from './Auth/Auth';
import Search from './Search/Search';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#265b73',
    },
  },
});

const App = () => {
  const [count, setCount] = useState(1);

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Router>
          <Header count={count} setCount={setCount} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </StylesProvider>
    </ThemeProvider>
  );
};

export default App;
