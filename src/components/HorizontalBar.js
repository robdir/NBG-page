import React, { PureComponent } from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class HorizontalChart extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: ['Minimum salary', 'Maximum salary'],
        datasets: [
          {
            label: 'Salaris indicatie Webdeveloper',
            backgroundColor: ['rgba(255,142,21,1)','rgba(255,100,21,1)'],
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,142,21,1)',
            data: [2300, 4300]
          },
        ]
      },
      chartOptions: {
            maintainAspectRatio: false,
            tooltips: {
              mode: 'x-axis'
            },
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: false,
                  suggestedMin: 1500,
                      },
                      stacked: true
                    }],
              xAxes: [{
                stacked: true,
                ticks: {
                  beginAtZero: false,
                  suggestedMin: 1500,
                },

              }]
            }
          }
    }
  }

  render() {
    return (
      <div>
        <HorizontalBar
        data={this.state.chartData}
        width={500}
        height={100}
        options={this.state.chartOptions}/>
      </div>
    );
  }
}


export default HorizontalChart
