import React, { Component } from 'react';
import './styles/Container_styles.css'
import Slider from 'react-slick'

class Vacancies extends Component {
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
        <div className="container vacancies" id="Vacatures">
        <h2> Vacatures Webdeveloper </h2>
        <hr/>
        <div> <p> Op zoek naar een nieuwe baan als Webdeveloper? Samen met onze vacature partners
          bieden wij je een groot aanbod aan actuele vacatures voor Webdeveloper. Wanneer je hieronder
          een voor jou geschikte vacature vind zal je doorklikken naar de vacaturepartner. De Webdeveloper
          heeft een combinatie van taken waar zowel technisch als creatief inzicht voor nodig is. Een Webdeveloper
          moet kunnen programmeren, redigeren en presenteren. De verdeling van deze taken is in elke functie anders,
          maar steeds geldt dat de Webdeveloper multidisciplinair te werk zal gaan. </p>
         </div>
        <hr/>

        <div className="slider">
          <Slider {...this.state.settings}>

            <div> <p> Stage: Backend developer (PHP, Mediadeveloper) </p>
            </div>
            <div> <p> Node.js developer </p>
            </div>
            <div><p> Senior Backend Developer</p>
            </div>
            <div><p> Frontend Engineer (English)</p>
            </div>
            <div><p> E-commerce Webdeveloper (PHP)</p>
            </div>
            <div><p> Mobile Web Developer</p>
            </div>

          </Slider>
        </div>

        </div>

      )
    }
}

export default Vacancies
