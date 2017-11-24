import React, { Component } from 'react';
import NodeNetwork from '../graphs/NodeNetwork'
import './styles/Container_styles.css'

class Network extends Component {


  render() {
    return(
        <div className="container network" id='Netwerk'>
            <h2> Netwerk Webdeveloper  </h2>
            <hr/>
            <p> De voornaamste contacten van een Webdeveloper zijn zijn werkgevers.
            Veel Webdevelopers werken bij internetbedrijven of bij webdevelopment bureaus.</p>
            <p> Daarnaast kan het soms handig zijn om feedback van gebruikers te krijgen,
            om een idee te krijgen van wat bezoekers eigenlijk willen van de website.
            Verder is er contact met de ICTers waarmee de Webdeveloper de website in elkaar zet en onderhoudt. </p>
            <NodeNetwork/>
        </div>
      )
    }
}

export default Network
