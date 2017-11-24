import React, { Component } from 'react';
import './styles/Container_styles.css';
import BusinessIcon from 'material-ui-icons/Business';

const iconStyles = {
                    marginRight: 24,
                    width:60,
                    height:60,
                };

class Organisation extends Component {


  render() {
    return(
        <div className="container">
        <BusinessIcon style={iconStyles} color='#14bcf0' hoverColor='#000000'/>
        <h2>Organisaties waar een webdeveloper doorgaans werkzaam is </h2>
        <hr/>
          <div>
          <p> Een Webdeveloper kan bij vele soorten bedrijven aan de slag
           zolang die maar een website hebben die ontwikkeld moet worden en
           onderhoud nodig heeft. Dit kan zowel bij een groot als een klein
           bedrijf, een particulier of publiek bedrijf, en op freelance
          of vaste basis. Vaak komt men dan op de communicatie- of marketingafdeling
           van de organisatie terecht. </p>

              </div>
            </div>
      )
    }
}

export default Organisation
