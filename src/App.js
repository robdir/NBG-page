import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './assets/styles/theme';
import Navigation from './components/Navigation';
import Salary from './components/Salary';
import Jobmarket from './components/Jobmarket'
import Description from './components/Description'
import Network from './components/Network'
import './App.css';


class App extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  render() {
    return (

      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
        <Navigation />
        <div className="master-container">
        <Description />
        <Salary />
        <Network />
        <Jobmarket />
        </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
