import React, { Component } from 'react';
import Education from './Education'
import './styles/Container_styles.css'
import DoughnutChart from '../graphs/Doughnutchart'
import PropTypes from 'prop-types'
import $ from 'jquery';
import './styles/Block.css'

class Jobmarket extends Component {


  render() {
    //this is to bypass CORS.. yeah. http://multiverso.me/AllOrigins/ ///
    var url = 'https://allorigins.us/get?method=raw&url=' + encodeURIComponent("https://trends.springest.com/automatisering-ict") + "&callback=?";

      var get_data =
        $.get(url, function(data) {
          var count = $(data).find('#page-wrapper > div.row.avg-row.fade-in > div:nth-child(1) > div > div > div > div.col-xs-8.text-right > div')
            console.log("count", count.text())
            var education_count = count.text();
            return education_count
          })

        console.log(get_data)


    return(
        <div className="container jobmarket">
          <h2>Arbeidsmarktperspectief en Doorgroeimogelijkheden Webdeveloper</h2>
            <hr/>
              <div> <p>Er zijn voldoende mogelijkheden om als Webdeveloper een baan te kunnen krijgen,
               zolang men maar competent genoeg is. Het helpt soms ook om een specialisme te ontwikkelen,
              aangezien veel vacatures op een een bepaald softwaresysteem zijn ingericht.
              Als Webdeveloper is het vervolgens mogelijk om door te groeien
              naar een positie zoals Senior Webdeveloper of Projectleider. </p> </div>
              <br/>
                <DoughnutChart />
              <br/>
              <div> <h3> Arbeidsmarktperspectief score webdeveloper </h3>
              <p>Hierboven vind je de score voor het arbeidsmarktperspectief voor het beroep webdeveloper.
              We hebben 5 scores: Zeer Goed, Goed, Redelijk, Matig en Slecht.
              </p> </div>
              <p>
              This score is calculated through data recieved from Intelligence Group & <a href=""> arbeitsmarktkansen.nl</a>
              The graph above indicates one of the factors contributing to the 'Zeer Goed' score of a career as a Web developer.</p>

              <p className= "mini-footer"> *Mogelijk gemaakt door <a href=""> Intelligence Group </a> </p>

              <div className="Block"> <Education/>  </div>

              </div>



      )
    }
}

export default Jobmarket
