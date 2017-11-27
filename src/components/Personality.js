import React, { Component } from 'react';
import './styles/Container_styles.css'
import './styles/Bubble.css'
import CheckIcon from 'material-ui-icons/Check';
import SmoothCollapse from 'react-smooth-collapse'

const iconStyles = {
                    marginRight: 24,
                    width:60,
                    height:50,
                };
class Personality extends Component {
  state: Object = {
    expanded: true
  };

  _toggle() {
    this.setState({expanded: !this.state.expanded})
  }

  render() {
    const {expanded} = this.state
    return(
        <div className="container personality" id='Persoontypen'>
        <h2> <CheckIcon onClick={() => this._toggle()} style={iconStyles} color='#14bcf0' hoverColor='#000000'/> Persoonstypen webdeveloper </h2>
        <hr/>
        <SmoothCollapse expanded={expanded}>
        <p>De Webdeveloper zit vaak overal tussen en moet zich snel aan kunnen passen.
        Ook moet de Webdeveloper het leuk vinden om steeds een nieuwe uitdaging aan te
        gaan en daarbij met andere mensen samen te kunnen werken (Levensgenieter).
        Om een goede website in elkaar te zetten (vooral bij het programmeren),
        moet de Webdeveloper nauwkeurig kunnen werken en moet hij goed op alle details kunnen letten (Waarnemer).</p>
        <h3> Wat zijn deze persoontypen? </h3>
        <hr/>
        <div className="bubble-items ">
          <div className="bubble"><p> Levensgenieter </p>
          <span className="bubble-pop-up-text"> <p>
            De levensgenieter is erg optimistisch, en kan dit optimisme goed op anderen
            overbrengen door overtuigend, en vooral ook veel, te praten. Hij zit vol nieuwe
            ideeën en potentiële toekomstvisies. Ook is hij actief en innovatief. Hij kan
            anderen goed motiveren en overtuigen van zijn eigen ideeën en snel schakelen
            tussen onderwerpen en projecten. </p>
            </span>
          </div>
          <div className="bubble"><p>Waarnemer </p>
            <span className="bubble-pop-up-text"> <p>
            De waarnemer is vaak specialist op een bepaald vakgebied en bezit daarmee veel
            en diepgaande kennis over zaken. Ook heeft hij een sterke motivatie om te werken
            en is hij analytisch, eerlijk en intellectueel. De waarnemer kan goed hoofd- en
            bijzaken scheiden. Tevens is de waarnemer door diens onafhankelijke, afstandelijke
            natuur goed in het houden van geheimen en is hij objectief. </p>
             </span></div>
        </div>
        </SmoothCollapse>
        </div>
      )
    }
}

export default Personality
