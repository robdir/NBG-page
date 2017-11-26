import React, { Component } from 'react';
import './styles/Container_styles.css'
import NotifIcon from 'material-ui-icons/NotificationsActive';

const iconStyles = {
                    marginRight: 24,
                    width:60,
                    height:50,
                };
class Beroepskeuze extends Component {

  render() {
    return(
        <div className="container">

          <h2><NotifIcon style={iconStyles} color='#14bcf0' hoverColor='#000000'/>Is het beroep webdeveloper iets voor jou?</h2>
          <hr />
        <p>Zou je graag webdeveloper willen worden? Of weet je nog niet
        welk beroep bij jou past? Als je wilt weten hoe je jouw eigenschappen
         en competenties kunt gebruiken op de arbeidsmarkt, vul dan onze
         beroepskeuze test in en kom erachter of een baan als webdeveloper
          bij jou past.</p>
        </div>
      )
    }
}

export default Beroepskeuze
