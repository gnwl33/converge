import React from 'react';
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
import Details from './Details/Details';
import './App.css';

// converge

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#265b73',
    },
    secondary: {
      main: '#122d4d',
    },
  },
  // overrides: {
  //   MuiOutlinedInput: {
  //     root: {
  //       '&:hover $notchedOutline': {
  //         borderColor: '#333',
  //       },
  //     },
  //   },
  // },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Router>
          <Header />
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
            <Route path="/details">
              <Details />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </StylesProvider>
    </ThemeProvider>
  );
};

export default App;
