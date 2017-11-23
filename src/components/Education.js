import React, { Component } from 'react';
import './styles/Container_styles.css'
import Slider from 'react-slick'

class Education extends Component {
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

  render() {
    return(
        <div className="container education">
        <h2> Webdeveloper worden: Opleiding tot webdeveloper </h2>
        <hr/>

        <div className="springest-courses">
        </div>


        <div className="slider">
          <Slider {...this.state.settings}>

            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </Slider>
        </div>

        </div>

      )
    }
}

export default Education
