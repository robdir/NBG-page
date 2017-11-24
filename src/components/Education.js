import React, { Component } from 'react';
import './styles/Container_styles.css'
import Slider from 'react-slick'
import education_icon from '../images/education_icon.svg'

class Education extends Component {
  constructor(props){
    super(props);
    this.state = {
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
      }

  }}//constructor and this.state

  render() {
    return(
        <div className="container education" id="Opleiding">
        <h2> Webdeveloper worden: Opleiding tot webdeveloper </h2>
        <hr/>

        <div className="springest-courses">
        </div>


        <div className="slider">
          <Slider {...this.state.settings}>

            <div>Codaisseur <img src={education_icon} alt=""/> </div>
            <div>PHP Coolness  <img src={education_icon} alt=""/> < /div>

            <div>REACT awesome
            <img src={education_icon} alt=""/></div>
            <div>Ruby! cool awesome
            <img src={education_icon} alt=""/></div>

          </Slider>
        </div>

        </div>

      )
    }
}

export default Education
