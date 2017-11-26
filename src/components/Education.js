import React, { Component } from 'react';
import './styles/Container_styles.css'
import Slider from 'react-slick'
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
        slidesToShow: 3,
        slidesToScroll: 3
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

            <div> <h3> Codaisseur Academy </h3> <img src={Coda} alt=""/>
            </div>
            <div> <h3> PHP Cursus </h3>  <img src={PHP} alt=""/>
            </div>
            <div><h3> JS React Cursus </h3>
            <img src={JS} alt=""/></div>
            <div><h3> Ruby on Rails </h3>
            <img src={RoR} alt=""/></div>

          </Slider>
        </div>

        </div>

      )
    }
}

export default Education
