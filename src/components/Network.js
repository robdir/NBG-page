import React, { Component } from 'react';
import NodeNetwork from '../graphs/NodeNetwork'
import './styles/Container_styles.css'
import NetIcon from 'material-ui-icons/People';
import SmoothCollapse from 'react-smooth-collapse'

const iconStyles = {
                    marginRight: 24,
                    width:60,
                    height:50,
                };

class Network extends Component {
  state: Object = {
    expanded: true
  };

  _toggle() {
    this.setState({expanded: !this.state.expanded})
  }

  render() {
    const {expanded} = this.state
    return(
        <div className="container network" id='Netwerk'>
            <h2> <NetIcon style={iconStyles} color='#14bcf0' hoverColor='#000000'/> Netwerk Webdeveloper  </h2>
            <hr/>
            <SmoothCollapse expanded={expanded}>
            <p> De voornaamste contacten van een Webdeveloper zijn zijn werkgevers.
            Veel Webdevelopers werken bij internetbedrijven of bij webdevelopment bureaus.</p>
            <p> Daarnaast kan het soms handig zijn om feedback van gebruikers te krijgen,
            om een idee te krijgen van wat bezoekers eigenlijk willen van de website.
            Verder is er contact met de ICTers waarmee de Webdeveloper de website in elkaar zet en onderhoudt. </p>
            <NodeNetwork/>
            <hr />
            <div className= "mini-footer"> <p> *Mogelijk gemaakt door <a href=""> Intelligence Group </a> </p>
            </div>
            </SmoothCollapse>
        </div>
      )
    }
}

export default Network
