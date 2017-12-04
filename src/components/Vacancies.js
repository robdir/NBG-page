import React, { Component } from 'react';
import './styles/Container_styles.css'
import Slider from 'react-slick'
import PHP from '../images/icons/php-outline.png'
import NJS from '../images/icons/nodejs.png'
import SQL from '../images/icons/sql.png'
import JS from '../images/icons/react.png'
import Native from '../images/icons/react-native.png'
import VacIcon from 'material-ui-icons/BusinessCenter';

const iconStyles = {
                    marginRight: 24,
                    width:60,
                    height:50,
                };

class Vacancies extends Component {


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
        <div className="container vacancies" id="Vacatures">
        <h2> <VacIcon style={iconStyles} color='#14bcf0' hoverColor='#000000'/> Vacatures Webdeveloper </h2>
        <hr/>


        <div className="slider">
          <Slider {...settings}>

            <div className="slider-card-vacature"> <h3> Stage: Backend developer (PHP, Mediadeveloper) </h3> <img src={PHP} alt=""/>

            <div className="mini-footer"><p><a href=""> Nationale Vacaturebank</a> - 3 dagen geleden</p> </div>
            </div>
            <div className="slider-card-vacature"> <h3> Node.js developer </h3>  <img src={NJS} alt=""/>

            <div className="mini-footer"><p><a href=""> Monsterboard </a> - 5 dagen geleden</p> </div>
            </div>
            <div className="slider-card-vacature"><h3> Senior Backend Developer</h3> <img src={SQL} alt=""/>

            <div className="mini-footer"><p><a href=""> Nationale Vacaturebank</a> - 3 dagen geleden</p> </div>
            </div>
            <div className="slider-card-vacature"><h3> Frontend Engineer (English)</h3> <img src={JS} alt=""/>

            <div className="mini-footer"><p><a href=""> Monsterboard</a> - 6 dagen geleden</p> </div>
            </div>
            <div className="slider-card-vacature"><h3> E-commerce Webdeveloper (PHP)</h3> <img src={PHP} alt=""/>

            <div className="mini-footer"><p><a href=""> Monsterboard</a> - 2 dagen geleden</p> </div>
            </div>
            <div className="slider-card-vacature"><h3> Mobile Web Developer</h3> <img src={Native} alt=""/>
              <div className="mini-footer"><p><a href=""> Monsterboard</a> - 6 dagen geleden</p> </div>
            </div>

          </Slider>
                  <hr/>

<div className="newspapercolums">
                    <p> Op zoek naar een nieuwe baan als Webdeveloper? Samen met onze vacature partners
                    bieden wij je een groot aanbod aan actuele vacatures voor Webdeveloper. Wanneer je hieronder
                    een voor jou geschikte vacature vind zal je doorklikken naar de vacaturepartner.
                    De Webdeveloper heeft een combinatie van taken waar </p>
                    <p>
                    zowel technisch als creatief inzicht voor nodig is. Een Webdeveloper
                    moet kunnen programmeren, redigeren en presenteren. De verdeling van deze taken is in elke functie anders,
                    maar steeds geldt dat de Webdeveloper multidisciplinair te werk zal gaan.
                    </p>
                    </div>
        </div>

        </div>

      )
    }
}

export default Vacancies
