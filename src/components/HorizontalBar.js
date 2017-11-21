import React, { PureComponent } from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class HorizontalChart extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Salary Indicator: MIN',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: 'Average Salary',
            backgroundColor: 'rgba(0,0,132,0.2)',
            borderColor: 'rgba(0,0,132,0.2)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0,99,132,0.4)',
            hoverBorderColor: 'rgba(0,99,132,1)',
            data: [10, 10, 10, 10, 10, 10, 10]
          },
          {
            label: 'Salary Indicator: MAX',
            backgroundColor: 'rgba(132,0,0,0.2)',
            borderColor: 'rgba(132,0,0,0.2)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(132,0,0,0.2)',
            hoverBorderColor: 'rgba(132,0,0,0.2)',
            data: [10, 10, 10, 10, 10, 10, 10]
          }
        ]
      },
      chartOptions: {
            maintainAspectRatio: true,
            tooltips: {
              mode: 'x-axis'
            },
            scales: {
              yAxes: [{
              ticks: {
                beginAtZero: false
              },
                stacked: false
                }],
              xAxes: [{
                stacked: true
              }]
            }
          }
    }
  }

  render() {
    return (
      <div>
        <h2>Horizontal Bar Example</h2>
        <HorizontalBar
        data={this.state.chartData}
        options={this.state.chartOptions} />
      </div>
    );
  }
}


export default HorizontalChart
