import React, { Component } from 'react';
import './styles/Container_styles.css'
import CreateIcon from 'material-ui-icons/Create';
import ExpandMore from 'material-ui-icons/ExpandMore'
import SmoothCollapse from 'react-smooth-collapse'

const iconStyles = {
                    marginRight: 25,
                    width:60,
                    height:50,
                };

const expandStyle = {
                    marginRight: 25,
                    width:60,
                    height:50,
                };

class Description extends Component {
  state: Object = {
    expanded: true
  };

  _toggle() {
    this.setState({expanded: !this.state.expanded})
  }

  render() {
    const {expanded} = this.state

    return(
        <div className="container description" id="Omschrijving">
        <div className="header-container">
        <CreateIcon style={iconStyles} color='#14bcf0' hoverColor='#000000'/>
        <h2>  Functieomschrijving: wat doet een Webdeveloper? </h2>
      
        <ExpandMore style={expandStyle} onClick={() => this._toggle()} color='#14bcf0' hoverColor='#000000'/>
        </div>
        <hr/>
        <SmoothCollapse expanded={expanded}>
          <p>De Webdeveloper heeft een combinatie van taken waar zowel technisch als creatief inzicht voor nodig is.
          Een Webdeveloper moet kunnen <b>programmeren, redigeren en presenteren.</b> De verdeling van deze taken is in elke functie anders,
          maar steeds geldt dat de Webdeveloper multidisciplinair te werk zal gaan. Dat betekent natuurlijk niet dat men overal maar oppervlakkige kennis van hoeft te hebben;
          een Webdeveloper heeft meestal een diepere kennis van programmeren dan bijvoorbeeld een webmaster.</p>
          <p>De Webdeveloper is vaak vanaf het begin van de creatie van een website aanwezig,
          en ontwikkelt zo de hele website van begin tot eind. Hij werkt hierbij natuurlijk met de eisen van de opdrachtgever.
          Het doel is om de website zo aantrekkelijk mogelijk te maken, met als basis een solide lay-out aangevuld met dynamische elementen en vooral een gebruiksvriendelijke interface.
          Hiervoor moeten niet alleen de wensen en eisen van de opdrachtgever worden meegenomen, maar vooral ook die van de toekomstige bezoeker. </p>

          </SmoothCollapse>
        </div>
      )
    }
}

export default Description
