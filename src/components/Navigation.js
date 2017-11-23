import React, { PureComponent } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more'
import FlatButton from 'material-ui/FlatButton'


class Navigation extends PureComponent {

  render() {
    return (
      <AppBar
        title="NationaleBeroepenGids.nl"
        iconElementLeft={<IconButton ><ExpandMore /></IconButton>}
        iconElementRight={<FlatButton label="Uw NBG" />}
        />
    )
  }
}


export default Navigation
