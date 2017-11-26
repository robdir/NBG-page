import React, { Component } from 'react';
import './styles/Footer.css'
import Logo from '../images/icons/logo.png'

class Footer extends Component {

  render() {
    return(
      <footer class="footer">
    <div class="footer-left col-md-4 col-sm-6">
      <p class="about">
      <img src={Logo} alt="NBG"/>
      </p>
    </div>
    <div class="footer-center col-md-4 col-sm-6">
      <div>
        <h2> Organisatie</h2>
      </div>
      <div>
        <i class="fa fa-phone"></i>
        <p><a href=""> Over ons</a></p>
      </div>
      <div>
        <i class="fa fa-envelope"></i>
        <p><a href=""> Contact opnemen</a></p>
      </div>
    </div>
    <div class="footer-right col-md-4 col-sm-6">
      <h2> Volg Ons </h2>
      <p class="menu">
        <a href=""> Blog</a>
        --
        <a href=""> Facebook</a>
        --
        <a href=""> Twitter</a>
         --
        <a href=""> LinkedIn</a>
        --
        <a href=""> Google+</a>
      </p>
      <br/>
      <p class="name"> NationaleBeroepenGids &copy; 2017</p>
    </div>
  </footer>
      )
    }
}

export default Footer
