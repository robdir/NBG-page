import React, { PureComponent } from 'react'
import AppBar from 'material-ui/AppBar'
import Sidebar from './Sidebar'
import Search from './Search'
class Navigation extends PureComponent {

  render() {
    return (
      <AppBar
        style={{ position: "fixed" }}
        title="NationaleBeroepenGids.nl"
        iconElementLeft={<Sidebar/>}
        iconElementRight={<Search/>}
        />
    )
  }
}


export default Navigation
