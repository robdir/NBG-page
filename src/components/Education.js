import React, { Component } from 'react';
import './styles/Container_styles.css'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GetCourses } from '../actions/springest_courses'
import EduIcon from 'material-ui-icons/School';

const iconStyles = {
                    marginRight: 24,
                    width:60,
                    height:50,
                };

class Education extends Component {
  componentWillMount(){
    this.props.GetCourses()
}
  static propTypes = {
    courses: PropTypes.arrayOf( PropTypes.object)
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
        <div className="container education" id="Opleiding">
        <h2> <EduIcon style={iconStyles} color='#14bcf0' hoverColor='#000000'/>  Webdeveloper worden: Opleiding tot webdeveloper </h2>
        <hr/>
        <p>De webdeveloper kan een MBO opleiding Webdeveloper (niveau 4) gevolgd hebben, <br />maar meestal is een HBO diploma in de
         richting van ICT of Informatiekunde nodig om aan werk te kunnen komen.</p>

         <h3>Opleidingen, cursussen en trainingen:</h3>

        <div className="slider">
          <Slider {...settings}>

          {this.props.courses.map((item,index) =>
            <div key={0}>
            <div className="slider-item">
                  <div className="slider-content"> <h3> {item['trainings'][0]['name']}</h3>
                  </div>

                  <div className="slider-content">   <p>Prijs: €{item['trainings'][0]['price']}</p>
                    </div>
                  <div className="slider-content">   <p>Duur: {item['trainings'][0]['total_run_time']} dagen</p>
                    </div>

                  <div className="slider-content">  <a href={item['trainings'][0]['institute']['url'] }><img src={item['trainings'][0]['institute']['logo'] } alt="" /></a>
                    </div>
                    </div>
              </div>)}

                {this.props.courses.map((item,index) =>
                  <div key={1}>
                  <div className="slider-item">
                          <div className="slider-content"> <h3> {item['trainings'][6]['name']}</h3>
                          </div>
                          <div className="slider-content">   <p>Prijs: €{item['trainings'][6]['price']}</p>
                            </div>
                          <div className="slider-content">   <p>Duur: {item['trainings'][6]['total_run_time']}</p>
                            </div>

                          <div className="slider-content">  <a href={item['trainings'][6]['institute']['url'] }><img src={item['trainings'][6]['institute']['logo'] } alt="" /></a>
                            </div>
                            </div>
                      </div>)}

                      {this.props.courses.map((item,index) =>
                          <div key={2}>
                          <div className="slider-item">
                              <div className="slider-content"> <h3> {item['trainings'][5]['name']} </h3>
                              </div>

                              <div className="slider-content">   <p>Prijs: €{item['trainings'][5]['price']}</p>
                                </div>
                              <div className="slider-content">   <p>Duur: Ongeveer 2 maanden</p>
                                </div>

                              <div className="slider-content">  <a href={item['trainings'][5]['institute']['url'] }>
                              <img src={item['trainings'][5]['institute']['logo'] } alt="" /></a>
                                </div>
                            </div>
                          </div>)}
          </Slider>
        </div>
      </div>

      )//return
    }//render
} //class


const mapStateToProps = function(state){
  return{
    courses: state.courses
  }
}

const mapDispatchToProps = {GetCourses}


export default connect(mapStateToProps, mapDispatchToProps)(Education)
