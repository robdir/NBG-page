import { React, PureComponent } from 'react'
import PropTypes from 'prop-types'


class ContentContainer extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    content: PropTypes.string,
    }


  render() {
    const { title, className, content } = this.props

    return(
    <div className={className}>
    <h3> {title} </h3>
    <p> {content} </p>
    </div>
    )
  }
}

export default ContentContainer
