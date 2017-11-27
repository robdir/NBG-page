import React, { Component } from 'react';
import './styles/Container_styles.css'
import HorizontalChart from '../graphs/HorizontalBar';
import CashIcon from 'material-ui-icons/AttachMoney';
import SmoothCollapse from 'react-smooth-collapse'

const iconStyles = {
                    marginRight: 24,
                    width:60,
                    height:50,
                };
class Salary extends Component {
  state: Object = {
    expanded: true
  };

  _toggle() {
    this.setState({expanded: !this.state.expanded})
  }

  render() {
    const {expanded} = this.state
    return(
        <div className="container salary" id="Salaris">
            <h2> <CashIcon onClick={() => this._toggle()} style={iconStyles} color='#14bcf0' hoverColor='#000000'/> Salaris Overzicht voor Webdeveloper </h2>
              <hr/>
              <SmoothCollapse expanded={expanded}>
              <div>
                <HorizontalChart />
                </div>
                <p>Het salaris van een Webdeveloper kan uiteenlopen van
                 €2300 tot €4200 per maand (bruto). Hoe de arbeidsvoorwaarden
                 precies geregeld zijn, is afhankelijk van de werkervaring,
                 de functie, het dienstverband en de organisatie zelf. Een
                 freelance Webdeveloper zal hele andere arbeidsvoorwaarden
                 krijgen dan iemand in vast dienstverband, waarbij vaak ook
                 geldt dat de freelancer zijn eigen tarief bepaalt.</p>
                 </SmoothCollapse>
        </div>
      )
    }
}

export default Salary
