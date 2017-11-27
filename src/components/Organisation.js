import React, { Component } from 'react';
import './styles/Container_styles.css';
import BusinessIcon from 'material-ui-icons/Business';
import SmoothCollapse from 'react-smooth-collapse'

const iconStyles = {
                    marginRight: 24,
                    width:60,
                    height:50,
                };

class Organisation extends Component {
  state: Object = {
    expanded: true
  };

  _toggle() {
    this.setState({expanded: !this.state.expanded})
  }

  render() {
    const {expanded} = this.state

    return(
        <div className="container" id="Organisatie">
        <h2> <BusinessIcon style={iconStyles} onClick={() => this._toggle()} color='#14bcf0' hoverColor='#000000'/>
Organisaties waar een webdeveloper doorgaans werkzaam is </h2>
        <hr/>
          <SmoothCollapse expanded={expanded}>
          <div>
          <p> Een Webdeveloper kan bij vele soorten bedrijven aan de slag
           zolang die maar een website hebben die ontwikkeld moet worden en
           onderhoud nodig heeft. Dit kan zowel bij een groot als een klein
           bedrijf, een particulier of publiek bedrijf, en op freelance
          of vaste basis. Vaak komt men dan op de communicatie- of marketingafdeling
           van de organisatie terecht. </p>

           <ul className="tags">
           <li><a href="" className="tag">Groot tot klein bedrijf</a></li>
           <li><a href="" className="tag">Particulier en Publiek </a></li>
           <li><a href="" className="tag">Profit en Non-Profit</a></li>
          <li><a href="" className="tag">Freelance of vaste basis</a></li>
           </ul>
              </div>
              </SmoothCollapse>
            </div>
      )
    }
}

export default Organisation
