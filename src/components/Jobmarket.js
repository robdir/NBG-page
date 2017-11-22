import React, { Component } from 'react';
import './styles/Jobmarket.css'
import JobVerticalBar from '../graphs/JobVerticalBar';

class Jobmarket extends Component {


  render() {
    return(
        <div className="jobmarket-container">
          <h2>Arbeidsmarktperspectief en Doorgroeimogelijkheden Webdeveloper</h2>
            <hr/>
              <p>Er zijn voldoende mogelijkheden om als Webdeveloper een baan te kunnen krijgen,
               zolang men maar competent genoeg is. Het helpt soms ook om een specialisme te ontwikkelen,
              aangezien veel vacatures op een een bepaald softwaresysteem zijn ingericht.
              Als Webdeveloper is het vervolgens mogelijk om door te groeien
              naar een positie zoals Senior Webdeveloper of Projectleider. </p>
              <br/>
              <JobVerticalBar />
              <br/>
              <h3> Arbeidsmarktperspectief score webdeveloper </h3>
              <p>Hieronder vind je de score voor het arbeidsmarktperspectief voor het beroep webdeveloper.
              We hebben 5 scores: Zeer Goed, Goed, Redelijk, Matig en Slecht.
              </p>
              <p>
              This score is calculated through data recieved from Intelligence Group & <a href="#"> arbeitsmarktkansen.nl</a>
              </p>
              <p>The graph above indicates one of the factors contributing to the 'Zeer Goed' score of a career as a Web developer.</p>
              <div className="IG-container">
                <div className="score">
                </div>
                <p> -- Zeer goed </p>
              </div>
        </div>
      )
    }
}

export default Jobmarket
