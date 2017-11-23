import React, { Component } from 'react';
import './styles/Personality.css'

class Personality extends Component {


  render() {
    return(
        <div className="personality-container">
        <h2> Persoonstypen webdeveloper </h2>
        <hr/>
        <p>De Webdeveloper zit vaak overal tussen en moet zich snel aan kunnen passen.
        Ook moet de Webdeveloper het leuk vinden om steeds een nieuwe uitdaging aan te
        gaan en daarbij met andere mensen samen te kunnen werken (Levensgenieter).
        Om een goede website in elkaar te zetten (vooral bij het programmeren),
        moet de Webdeveloper nauwkeurig kunnen werken en moet hij goed op alle details kunnen letten (Waarnemer).</p>
        <h3> Wat zijn deze persoontypen? </h3>
        <hr/>
        <div className="personality-items ">
          <div className="personality-type"><p> Levensgenieter </p>
          <span className="personality-text">
            De levensgenieter is erg optimistisch, en kan dit optimisme goed op anderen
            overbrengen door overtuigend, en vooral ook veel, te praten. Hij zit vol nieuwe
            ideeën en potentiële toekomstvisies. Ook is hij actief en innovatief. Hij kan
            anderen goed motiveren en overtuigen van zijn eigen ideeën en snel schakelen
            tussen onderwerpen en projecten.
            </span>
          </div>
          <div className="personality-type"><p>Waarnemer </p>
            <span className="personality-text">
            De waarnemer is vaak specialist op een bepaald vakgebied en bezit daarmee veel
            en diepgaande kennis over zaken. Ook heeft hij een sterke motivatie om te werken
            en is hij analytisch, eerlijk en intellectueel. De waarnemer kan goed hoofd- en
            bijzaken scheiden. Tevens is de waarnemer door diens onafhankelijke, afstandelijke
            natuur goed in het houden van geheimen en is hij objectief.
             </span></div>
        </div>
        </div>
      )
    }
}

export default Personality