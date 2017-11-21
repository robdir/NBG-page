import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import HomeIcon from 'material-ui/svg-icons/action/home'
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
