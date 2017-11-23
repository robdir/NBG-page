import React, { PureComponent } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more'
import TextField from 'material-ui/TextField'
import SearchIcon from 'material-ui/svg-icons/action/search'


class Navigation extends PureComponent {

  render() {
    return (
      <AppBar
        title="NationaleBeroepenGids.nl"
        iconElementLeft={<IconButton ><ExpandMore /></IconButton>}
        iconElementRight={<TextField leftIcon={<SearchIcon/>} underlineDisabledStyle="true" hintText="Zoeken naar..."/>}
        />
    )
  }
}


export default Navigation
