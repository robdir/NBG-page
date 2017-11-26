import React, { Component } from 'react';
import './styles/Container_styles.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { UpdateBooks } from '../actions/books'
import Slider from 'react-slick'
import bookcover from '../images/book_cover.jpg'
import StarIcon from 'material-ui-icons/Star';

const iconStyles = {
                    marginRight: 24,
                    width:60,
                    height:50,
                };

class Books extends Component {

  constructor(props){
    super(props);
    this.state = {
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      }

  }}//constructor and this.state


  componentWillMount(){
    this.props.UpdateBooks()
}
  static propTypes = {
    books: PropTypes.arrayOf(PropTypes.string)
  }

  render() {
    return(
      <div className="container books">
        <h2> <StarIcon style={iconStyles} color='#14bcf0' hoverColor='#000000'/> Recommended Books </h2>
        <hr/>
      <div className="slider">
        <Slider {...this.state.settings}>

        {this.props.books.map((item,index) =>
          <div key={index}>
          <img src={bookcover} alt="BLAH"/>
          <p>{item}</p>

          </div>)}
        </Slider>
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
