import React, { PureComponent } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/svg-icons/navigation/menu'
import {cyan500} from 'material-ui/styles/colors'

const menuStyle = {
  backgroundColor: cyan500
}

class Sidebar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {open: false};
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
        <Drawer containerStyle={menuStyle} open={this.state.open} >
        <div className="menu">
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
          <MenuItem onClick={this.Close}> <p> Menu sluiten </p> </MenuItem>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Sidebar
