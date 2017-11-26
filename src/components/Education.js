import React, { Component } from 'react';
import './styles/Container_styles.css'
import Slider from 'react-slick'
import education_icon from '../images/education_icon.svg'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GetCourses } from '../actions/springest_courses'

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

  componentWillMount(){
    this.props.GetCourses()
}
  static propTypes = {
    courses: PropTypes.String
  }

  render() {
    return(
        <div className="container education" id="Opleiding">
        <h2> Webdeveloper worden: Opleiding tot webdeveloper </h2>
        <hr/>

        <div className="springest-courses">
        {this.props.courses}
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


const mapStateToProps = function(state){
  return{
    courses: state.courses
  }
}

const mapDispatchToProps = {GetCourses}


export default connect(mapStateToProps, mapDispatchToProps)(Education)
