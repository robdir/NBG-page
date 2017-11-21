import React, { PureComponent } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more'



class Navigation extends PureComponent {

  render() {
    return (
      <AppBar
        title="nationaleberoepengids.nl"
        iconElementLeft={<IconButton ><ExpandMore /></IconButton>}
        />
    )
  }
}


export default Navigation
