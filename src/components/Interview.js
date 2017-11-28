import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import webdeveloper from '../images/web-developer-interview.jpg'
import blogwriter from '../images/writer_of_blog.jpg'
import {grey100} from 'material-ui/styles/colors'
import './styles/Container_styles.css'

const cardStyle = {
  backgroundColor: grey100
}

const Interview = () => (
  <div className = "container interview" id="Interview">
  <Card containerStyle={cardStyle}>
    <CardHeader
      title="Written by: Robert van El"
      subtitle= "Content Manager van NationaleBeroepenGids"
      avatar={blogwriter}
    />
    <CardMedia
      overlay={<CardTitle title=" 'I am living the dream, never going back to my old job' " subtitle="Jan de Vries made the swith from cassiere to webdeveloper" />}

    >
      <img src={webdeveloper} alt="" />
    </CardMedia>
    <CardTitle title="Interview with a Webdeveloper: Jan de Vries" subtitle="We spraken Jan in zijn huis in Waddinxveen" />
    <CardText>
    <p> <b> Hoe ziet een doorsnee dag van een webdeveloper eruit? </b> <br/>
    We beginnen de dag meestal eerst met een goede kop koffie. Daarna hebben we altijd een stand-up van 15 minuten. We bespreken... </p>
    </CardText>
    <CardActions>
      <RaisedButton primary={true} label="Lees het hele interview" />
    </CardActions>
  </Card>
  </div>
);

export default Interview;
