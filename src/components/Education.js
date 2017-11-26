import React, { Component } from 'react';
import './styles/Container_styles.css'
import Slider from 'react-slick'
import education_icon from '../images/education_icon.svg'
import Coda from '../images/icons/coda.png'
import PHP from '../images/icons/php-outline.png'
import JS from '../images/icons/react.png'
import RoR from '../images/icons/ruby.png'

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

            <div> <p> Codaisseur Academy </p> <img src={Coda} alt=""/>
            </div>
            <div> <p> PHP Cursus </p>  <img src={PHP} alt=""/>
            </div>
            <div><p> JS React Cursus </p>
            <img src={JS} alt=""/></div>
            <div><p> Ruby on Rails </p>
            <img src={RoR} alt=""/></div>

          </Slider>
        </div>

        </div>

      )
    }
}

export default Education
