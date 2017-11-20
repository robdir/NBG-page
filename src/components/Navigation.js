import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import HomeIcon from 'material-ui/svg-icons/action/home'


class Navigation extends PureComponent {

  render() {
    return (
      <AppBar
        title="nationaleberoepengids.nl"
        iconElementLeft={<IconButton ><HomeIcon /></IconButton>}
        />
    )
  }
}


export default Navigation
