import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './assets/styles/theme';
import Navigation from './components/Navigation';
import Salary from './components/Salary';
import Competences from './components/Competences';
import Jobmarket from './components/Jobmarket'
import Description from './components/Description'
import Network from './components/Network'
import Personality from './components/Personality'
import Organisation from './components/Organisation'
import Beroepskeuze from './components/Beroepskeuze'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Books from './components/Books';
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
        <Salary />
        <Network />
        <Competences />
        <Books />
        <Personality />
        <Organisation />
        <Beroepskeuze />
        </div>
        <Footer/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
