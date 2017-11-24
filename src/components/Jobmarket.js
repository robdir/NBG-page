import React, { Component } from 'react';
import './styles/Container_styles.css'
import './styles/Jobmarket.css'
import DoughnutChart from '../graphs/Doughnutchart'
import Books from './Books';


class Jobmarket extends Component {


  render() {
    return(
      <div className= "large-container">
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
              <p>Hieronder vind je de score voor het arbeidsmarktperspectief voor het beroep webdeveloper.
              We hebben 5 scores: Zeer Goed, Goed, Redelijk, Matig en Slecht.
              </p> </div>
              <p>
              This score is calculated through data recieved from Intelligence Group & <a href=""> arbeitsmarktkansen.nl</a>
              The graph above indicates one of the factors contributing to the 'Zeer Goed' score of a career as a Web developer.</p>
              </div>



                <Books />

          </div>
      )
    }
}

export default Jobmarket
