import React, { Component } from 'react';
import './Salary.css'
import HorizontalChart from './HorizontalBar';

class Salary extends Component {


  render() {
    return(
        <div className="salary-container">
            <h2> Salaris Overzicht voor Webdeveloper </h2>
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
