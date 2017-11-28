import React, { Component } from 'react';
import './styles/Container_styles.css'
import NotifIcon from 'material-ui-icons/NotificationsActive';
import RaisedButton from 'material-ui/RaisedButton';
import SmoothCollapse from 'react-smooth-collapse'
import ExpandMore from 'material-ui-icons/ExpandMore'

const iconStyles = {
                    marginRight: 24,
                    width:60,
                    height:50,
};

const expandStyle = {
                    marginRight: 0,
                    width:60,
                    height:50,
};


class Beroepskeuze extends Component {
  state: Object = {
    expanded: true
  };

  _toggle() {
    this.setState({expanded: !this.state.expanded})
  }

  render() {
    const {expanded} = this.state
    return(
        <div className="container beroepskeuze">
          <div className="header-container">

          <NotifIcon style={iconStyles} color='#14bcf0' hoverColor='#000000'/>
          <h2>Is het beroep webdeveloper iets voor mij?</h2>
          <ExpandMore style={expandStyle} onClick={() => this._toggle()} color='#14bcf0' hoverColor='#000000' />
          </div>
          <hr />
            <SmoothCollapse expanded={expanded}>
        <p>Zou je graag webdeveloper willen worden? Of weet je nog niet
        welk beroep bij jou past? Als je wilt weten hoe je jouw eigenschappen
         en competenties kunt gebruiken op de arbeidsmarkt, vul dan onze
         beroepskeuze test in en kom erachter of een baan als webdeveloper
          bij jou past.</p>

          <p>De drie gratis beroepentests van nationaleberoepengids.nl
         Ontdek welke beroepen bij jouw interesses en vaardigheden passen en doe één of meerdere, gratis beroepskeuzetests
         van de Nationale Beroepengids. Je kunt kiezen uit onze beknopte, middellange en uitgebreide beroepentest. Alle beroepen
          (meer dan 2400!) die op deze website staan, zijn gekoppeld aan de tests. Bij iedere beroepskeuzetest is het belangrijk
          dat je niet te lang nadenkt over het antwoord, dat geeft meestal het beste resultaat.</p>


          <p>Je vult je vijf sterkste competenties in, evenals je persoonstypen, je hoogst genoten opleiding, de studierichting
           van je opleiding en je gewenste organisatietype (profit of non-profit). Na enkele minuten weet jij welke beroepen
           aansluiten bij jouw interesses, vaardigheden en karakter.  </p>
              <RaisedButton primary={true} label="Doe de Beroepskeuze Test" />
              </SmoothCollapse>
        </div>
      )
    }
}

export default Beroepskeuze
