import React, { PureComponent } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import Sidebar from './Sidebar'
import TextField from 'material-ui/TextField'


class Navigation extends PureComponent {

  render() {
    return (
      <AppBar
       style={{ position: "fixed" }}
        title="NationaleBeroepenGids.nl"
        iconElementLeft={<Sidebar/>}
        iconElementRight={<TextField hintText="Zoeken naar..."/>}
        />
    )
  }
}


export default Navigation
