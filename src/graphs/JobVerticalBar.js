import React, { PureComponent } from 'react';
import {Doughnut} from 'react-chartjs-2';

class JobVerticalBar extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: ['Gemiddelde Baankans Webdeveloper', 'Baankans '],
        datasets: [
          {
            label: 'Gemiddelde Baankans Nederland %',
            backgroundColor: ['rgba(255,10,21,1)','rgba(0,0,0,0)'],
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            data: [99, 2]
          },

          {
            label: 'Baankans Webdeveloper %',
            backgroundColor: ['rgba(255,100,21,1)', 'rgba(0,0,0,0)'],
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 0,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            data: [79.5, 31.5]
          },

        ]
      },
      chartOptions: {
            maintainAspectRatio: false,
            responsive:true

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
