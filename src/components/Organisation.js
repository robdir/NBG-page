import React, { Component } from 'react';
import './styles/Container_styles.css';
import BusinessIcon from 'material-ui-icons/Business';

const iconStyles = {
                    marginRight: 24,
                    width:60,
                    height:50,
                };

class Organisation extends Component {


  render() {
    return(
        <div className="container">
        <h2>        <BusinessIcon style={iconStyles} color='#14bcf0' hoverColor='#000000'/>
Organisaties waar een webdeveloper doorgaans werkzaam is </h2>
        <hr/>
          <div>
          <p> Een Webdeveloper kan bij vele soorten bedrijven aan de slag
           zolang die maar een website hebben die ontwikkeld moet worden en
           onderhoud nodig heeft. Dit kan zowel bij een groot als een klein
           bedrijf, een particulier of publiek bedrijf, en op freelance
          of vaste basis. Vaak komt men dan op de communicatie- of marketingafdeling
           van de organisatie terecht. </p>

           <ul class="tags">
           <li><a href="" class="tag">Groot tot klein bedrijf</a></li>
           <li><a href="" class="tag">Particulier en Publiek </a></li>
           <li><a href="" class="tag">Profit en Non-Profit</a></li>
          <li><a href="" class="tag">Freelance of vaste basis</a></li>
           </ul>
              </div>
            </div>
      )
    }
}

export default Organisation
