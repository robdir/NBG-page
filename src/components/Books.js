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

  componentWillMount(){
    this.props.UpdateBooks()
}
  static propTypes = {
    books: PropTypes.array
  }


  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };


    return(

      <div className="container books">
        <h2> <StarIcon style={iconStyles} color='#14bcf0' hoverColor='#000000'/> Recommended Books </h2>
        <hr/>
      <div className="slider">
        <Slider {...settings}>

        {this.props.books.map((item,index) =>
          <div key={index}>
          <p>{item[0]}</p>
          <img src={item[1] && item[1][0]['url']} alt=""/>


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
