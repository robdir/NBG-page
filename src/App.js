import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './assets/styles/theme';
import Navigation from './components/Navigation';
import Salary from './components/Salary';
import Competences from './components/Competences';
import Jobmarket from './components/Jobmarket'
import Education from './components/Education'
import Description from './components/Description'
import Network from './components/Network'
import Personality from './components/Personality'
import Organisation from './components/Organisation'
import Beroepskeuze from './components/Beroepskeuze'
import Banner from './components/Banner'
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
        <Banner />
        <div className="master-container">
        <Description />
        <Jobmarket />
        <Education />
        <Salary />
        <Network />
        <Competences />

        <Personality />
        <Organisation />
        <Beroepskeuze />

        </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
