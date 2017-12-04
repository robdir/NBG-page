import React, { PureComponent } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/svg-icons/navigation/menu'

import {lightBlue400} from 'material-ui/styles/colors'

const menuStyle = {
  backgroundColor: lightBlue400,
}

class Sidebar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleOpen = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <Menu
          style={{ height: "40px", color: "White"}}
          label="Toggle Drawer"
          onClick={this.handleOpen}
        />
        <Drawer
          containerStyle={menuStyle}
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <div className="menu">
          <MenuItem><p>Ga direct naar:</p></MenuItem>
          <hr/>
          <MenuItem onClick={this.handleClose}><a href='#Omschrijving'><p>Functieomschrijving</p></a></MenuItem>
          <MenuItem onClick={this.handleClose}><a href='#Opleiding'><p>Opleiding</p></a></MenuItem>
          <MenuItem onClick={this.handleClose}><a href='#Vacatures'><p>Vacatures</p></a></MenuItem>
          <MenuItem onClick={this.handleClose}><a href='#Salaris'><p>Salaris</p></a></MenuItem>
          <MenuItem onClick={this.handleClose}><a href='#Netwerk'><p>Netwerk</p></a></MenuItem>
          <MenuItem onClick={this.handleClose}><a href='#Persoontypen'><p>Persoontypen</p></a></MenuItem>
          <MenuItem onClick={this.handleClose}><a href='#Organisatie'><p>Organisaties</p></a></MenuItem>
          <MenuItem onClick={this.handleClose}><a href='#Interview'><p>Interview</p></a></MenuItem>
          <hr/>
          <MenuItem onClick={this.handleClose}> <p> Menu sluiten </p> </MenuItem>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Sidebar
