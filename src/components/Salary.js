import React, { Component } from 'react';
import './styles/Container_styles.css'
import HorizontalChart from '../graphs/HorizontalBar';

class Salary extends Component {


  render() {
    return(
        <div className="container salary" id="Salaris">
            <h2> € Salaris Overzicht voor Webdeveloper </h2>
              <hr/>
                <HorizontalChart />
                <p>Het salaris van een Webdeveloper kan uiteenlopen van
                 €2300 tot €4200 per maand (bruto). Hoe de arbeidsvoorwaarden
                 precies geregeld zijn, is afhankelijk van de werkervaring,
                 de functie, het dienstverband en de organisatie zelf. Een
                 freelance Webdeveloper zal hele andere arbeidsvoorwaarden
                 krijgen dan iemand in vast dienstverband, waarbij vaak ook
                 geldt dat de freelancer zijn eigen tarief bepaalt.</p>
        </div>
      )
    }
}

export default Salary
