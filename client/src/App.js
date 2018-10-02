// Global imports, including react dependencies
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Switch, Route } from 'react-router-dom'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

// Components
import Login from './components/login';
import Quote from './components/quote';
import PriceList from './components/priceList';

// Styles
import { palette } from './style.css'
import './App.css';

const theme = createMuiTheme({palette});

class App extends Component {
  render() {
    
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <div className="App-container">
              <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/quote" component={Quote}/>
                <Route path="/priceList" component={PriceList}/>
              </Switch>
            </div>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
