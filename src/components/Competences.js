import React, { Component } from 'react';
import './styles/Bubble.css'
import './styles/Container_styles.css'
import CheckIcon from 'material-ui-icons/Check';
import SmoothCollapse from 'react-smooth-collapse'

const iconStyles = {
                    marginRight: 24,
                    width:60,
                    height:50,
                };

class Competences extends Component {
    state: Object = {
      expanded: true
    };

    _toggle() {
      this.setState({expanded: !this.state.expanded})
    }

    render() {
      const {expanded} = this.state

      return (
        <div className="container competences">
        <h2><CheckIcon onClick={() => this._toggle()} style={iconStyles} color='#14bcf0' hoverColor='#000000'/>Competenties van een Webdeveloper </h2>
        <hr />
        <SmoothCollapse expanded={expanded}>
        <div className="bubble-items ">
          <div className="bubble"><p> Klantgerichtheid </p>
          <span className="bubble-pop-up-text"> <p>Klantgerichtheid: Mensen die
          beschikken over deze competentie kunnen goed inspelen op de verwachtingen en behoeften van klanten.
          Dit kunnen zowel uitgesproken als onuitgesproken behoeften zijn. Dit is dan ook aan deze persoon om
          dit uit te zoeken. Zij voelen zich betrokken bij de klant en zetten zich vaak voor 100% in voor deze
           klant. Tevens toont deze persoon respect naar de klant. Een bekend spreekwoord wat past bij deze
           competentie is ‘De klant is koning’. Verder weet deze persoon de verschillende groepen klanten en
            hun behoeften te onderscheiden. </p>
            </span></div>

          <div className="bubble"><p>Analytisch </p>
            <span className="bubble-pop-up-text"> <p> Analytisch: Hoofd- en bijzaken van elkaar scheiden, dat ligt
            deze mensen wel. Zij pakken de kern van het probleem aan en bekijken dit vanuit verschillende
            oogpunten. Daarnaast leggen zij verbanden tussen deze verschillende perspectieven. Deze analytische
            mensen beginnen bij de hoofdzaak en pakken vervolgens de bijzaken aan. Hierbij worden gevolgen op korte
             en op lange termijn in de gaten gehouden. Uiteindelijk komen zij met een duidelijke conclusie.
             Lees meer over de competentie: <a href="">Analytisch </a> </p>
             </span></div>
          <div className="bubble"><p>Ondernemerschap </p>
            <span className="bubble-pop-up-text"> <p>Deze mensen hebben kennis op veel verschillende gebieden.
            Zij zien nieuwe kansen en bedreigingen van de markt en durven nieuwe producten op de markt te lanceren.
            Zij nemen hierbij risico’s en proberen zakelijke voordelen te behalen.
            Zij spelen in op ‘gaten’ in de markt. Hierbij proberen zij zowel hun eigen belangen als de belangen
            van eventuele gebruikers goed in de gaten te houden. Deze ondernemers doen onderzoek naar haalbaarheid,
            klantvriendelijkheid en proberen hierop te anticiperen.  </p> </span></div>
          <div className="bubble"><p>Innovatief </p>
            <span className="bubble-pop-up-text"> <p> Deze mensen zijn in staat om patronen en randvoorwaarden los
             te laten en oplossingen of nieuwe manier van denken te ontwikkelen. Zij kijken eerst naar het resultaat,
             bedenken vervolgens oplossingen en betrekken vervolgens pas de randvoorwaarden en regels.
             Tijdens brainstormsessies komen deze mensen vaak met heel veel ideeën. De competentie ‘innovatief’ heeft
             veel overeenkomsten met de competentie ‘creativiteit’. Deze mensen hebben vaak veel verschillende creatieve
             ideeën. Daarbij houden ze het resultaat wel voor ogen. Verder kunnen deze innovators vaak goed conceptueel denken,
            zij zien oplossingen voor problemen en kijken hierbij niet direct naar de regels en randvoorwaarden.</p> </span>
            </div>
        </div>
        </SmoothCollapse>
        </div>
      )
    }
}

export default Competences
