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
          <h2> <ExpandMore style={expandStyle} onClick={() => this._toggle()} color='#14bcf0' hoverColor='#000000' />
          <NotifIcon style={iconStyles} color='#14bcf0' hoverColor='#000000'/>
          Is het beroep webdeveloper iets voor mij?</h2>
          <hr />
            <SmoothCollapse expanded={expanded}>
        <p>Zou je graag webdeveloper willen worden? Of weet je nog niet
        welk beroep bij jou past? Als je wilt weten hoe je jouw eigenschappen
         en competenties kunt gebruiken op de arbeidsmarkt, vul dan onze
         beroepskeuze test in en kom erachter of een baan als webdeveloper
          bij jou past.</p>
              <RaisedButton primary={true} label="Doe de Beroepskeuze Test" />
              </SmoothCollapse>
        </div>
      )
    }
}

export default Beroepskeuze
