import React, { PureComponent } from 'react';
import {Doughnut} from 'react-chartjs-2';

class JobVerticalBar extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: ['Gemiddelde Baankans Webdeveloper'],
        datasets: [
          {
            label: 'Gemiddelde Baankans Nederland %',
            backgroundColor: ['#14BCF0','rgba(0,0,0,0)'],
            borderWidth: 1,
            hoverBackgroundColor: '#69d7f9',
            data: [99]
          },
          {
            label: 'Baankans Webdeveloper %',
            backgroundColor: ['#DEDEDE', 'rgba(0,0,0,0)'],
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 0,
            hoverBackgroundColor: '#a8b2b5',
            data: [79.5, 30.5]
          },
        ]
      },
      chartOptions: {
            maintainAspectRatio: false,
            responsive:true,
            circumference: 6,
          }
    }
  }

  render() {
    return (
      <div>
        <Doughnut
        data={this.state.chartData}
        options={this.state.chartOptions}/>
      </div>
    );
  }
}


export default JobVerticalBar
