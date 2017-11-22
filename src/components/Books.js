import React, { Component } from 'react';
import './styles/Books.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { UpdateBooks } from '../actions/books'


class Books extends Component {
  componentWillMount(){
    this.props.UpdateBooks()
  }

  static propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
		    titel: PropTypes.string.isRequired,
		    price: PropTypes.number.isRequired
	}))
  }

  render() {
    return(
        <div className="books-container">
            <h2>Recommended Books </h2>
            <hr/>
            <ol>
            <li>
              {this.props.books}
              </li>
        </ol>
        </div>
      )
    }
}

const mapStateToProps = function(state){
  return{
    updatebooks: state.books
  }
}

const mapDispatchToProps = {UpdateBooks}

export default connect(mapStateToProps, mapDispatchToProps)(Books)
