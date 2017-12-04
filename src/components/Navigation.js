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
        iconStyleLeft={{  marginTop: 'auto', marginBottom: 'auto'}}
        iconElementRight={<Search/>}
        iconStyleRight={{  marginTop: 'auto', marginBottom: 'auto'}}
        />
    )
  }
}


export default Navigation
