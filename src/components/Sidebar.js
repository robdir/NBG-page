import React, { PureComponent } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/svg-icons/navigation/menu'
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
          style={{ height: "40px", color: "White"}}
          label="Toggle Drawer"
          onClick={this.Open}
        />
        <Drawer open={this.state.open}>
          <MenuItem><p>Ga direct naar:</p></MenuItem>
          <hr/>
          <MenuItem onClick={this.Close}><a href='#Omschrijving'><p>Functieomschrijving</p></a></MenuItem>
          <MenuItem onClick={this.Close}><a href='#Opleiding'><p>Opleiding</p></a></MenuItem>
          <MenuItem onClick={this.Close}><a href='#Vacatures'><p>Vacatures</p></a></MenuItem>
          <MenuItem onClick={this.Close}><a href='#Salaris'><p>Salaris</p></a></MenuItem>
          <MenuItem onClick={this.Close}><a href='#Netwerk'><p>Netwerk</p></a></MenuItem>
          <MenuItem onClick={this.Close}><a href='#Persoontypen'><p>Persoontypen</p></a></MenuItem>
          <MenuItem onClick={this.Close}><a href='#Organisatie'><p>Organisaties</p></a></MenuItem>
          <MenuItem onClick={this.Close}><a href='#Interview'><p>Interview</p></a></MenuItem>
          <hr/>
          <MenuItem onClick={this.Close}> Menu sluiten </MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Sidebar
