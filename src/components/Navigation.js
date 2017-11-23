import React, { PureComponent } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more'
<<<<<<< HEAD
import FlatButton from 'material-ui/FlatButton'
=======
import TextField from 'material-ui/TextField'
>>>>>>> 493e8d7914d3c6e377fce73929f02d712ba8468a


class Navigation extends PureComponent {

  render() {
    return (
      <AppBar
        title="NationaleBeroepenGids.nl"
        iconElementLeft={<IconButton ><ExpandMore /></IconButton>}
<<<<<<< HEAD
        iconElementRight={<FlatButton label="Uw NBG" />}
=======
        iconElementRight={<TextField hintText="Zoeken naar..."/>}
>>>>>>> 493e8d7914d3c6e377fce73929f02d712ba8468a
        />
    )
  }
}


export default Navigation
