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
    books: PropTypes.arrayOf(PropTypes.string)
  }

  render() {
    return(
        <div className="books-container">
            <h2>Recommended Books </h2>
            <hr/>
            <div className="Book" >
              <ul>
                {this.props.books.map((item,index) =>
                  <li key={index}>{item}</li>
                )}
              </ul>
              </div>
        </div>
      )
    }
}

const mapStateToProps = function(state){
  return{
    books: state.books
  }
}

const mapDispatchToProps = {UpdateBooks}

export default connect(mapStateToProps, mapDispatchToProps)(Books)
