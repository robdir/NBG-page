import React, { PureComponent } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/svg-icons/navigation/menu'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../assets/styles/theme';
import PropTypes from 'prop-types'

class Sidebar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  Open = () => this.setState({open: !this.state.open});
  Close = () => this.setState({open: !this.state.open})

  render() {
    return (
      <div>
        <Menu
          label="Toggle Drawer"
          onClick={this.Open}
        />
        <MuiThemeProvider muiTheme={muiTheme}>
        <Drawer open={this.state.open} docked='false'>
          <MenuItem>Ga direct naar</MenuItem>
          <hr/>
          <MenuItem><a href='#Omschrijving'>Functieomschrijving</a></MenuItem>
          <MenuItem>Vacatures</MenuItem>
          <MenuItem>Opleiding</MenuItem>
          <MenuItem>Salaris</MenuItem>
          <MenuItem>Netwerk</MenuItem>
          <MenuItem>Persoontypen</MenuItem>
          <MenuItem onClick={this.Close}> GO AWAY </MenuItem>
        </Drawer>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Sidebar
