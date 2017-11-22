import React, { Component } from 'react';
import './styles/Competences.css'

class Competences extends Component {


  render() {
    return(
        <div className="competences-container">
        <h2>Competenties van een Webdeveloper </h2>
        <hr />
        <div className="competences-items ">
          <div className="competency"><p> Klantgerichtheid </p>
          <span className="competency-text"> Klantgerichtheid: Mensen die
          beschikken over deze competentie kunnen goed inspelen op de verwachtingen en behoeften van klanten.
          Dit kunnen zowel uitgesproken als onuitgesproken behoeften zijn. Dit is dan ook aan deze persoon om
          dit uit te zoeken. Zij voelen zich betrokken bij de klant en zetten zich vaak voor 100% in voor deze
           klant. Tevens toont deze persoon respect naar de klant. Een bekend spreekwoord wat past bij deze
           competentie is ‘De klant is koning’. Verder weet deze persoon de verschillende groepen klanten en
            hun behoeften te onderscheiden.
            </span></div>

          <div className="competency"><p>Analytisch </p>
            <span className="competency-text"> Analytisch: Hoofd- en bijzaken van elkaar scheiden, dat ligt
            deze mensen wel. Zij pakken de kern van het probleem aan en bekijken dit vanuit verschillende
            oogpunten. Daarnaast leggen zij verbanden tussen deze verschillende perspectieven. Deze analytische
            mensen beginnen bij de hoofdzaak en pakken vervolgens de bijzaken aan. Hierbij worden gevolgen op korte
             en op lange termijn in de gaten gehouden. Uiteindelijk komen zij met een duidelijke conclusie.
             Lees meer over de competentie: <a href="">Analytisch </a>
             </span></div>
          <div className="competency"><p>Ondernemerschap </p>
            <span className="competency-text"> Ondernemerschap is supercool </span></div>
          <div className="competency"><p>Innovatief </p>
            <span className="competency-text"> Innovatief is supercool </span></div>
          <div className="competency"><p>Aanpassingsvermogen</p>
            <span className="competency-text"> Aanpassingsvermogen is supercool </span></div>
        </div>
        </div>
      )
    }
}

export default Competences
