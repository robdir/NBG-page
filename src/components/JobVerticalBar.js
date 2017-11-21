import React, { PureComponent } from 'react';
import {Bar} from 'react-chartjs-2';

class JobVerticalBar extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: ['Baankans AVG Nederland', 'Baankans Webdeveloper'],
        datasets: [
          {
            label: 'Baankans',
            backgroundColor: ['rgba(255,142,21,1)','rgba(255,100,21,1)'],
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,142,21,1)',
            data: [79.5, 99, 100]
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
                beginAtZero: true
              },
                stacked: true
                }],
              xAxes: [{
                barThickness: 100,
                stacked: true
              }]
            }
          }
    }
  }

  render() {
    return (
      <div>
        <Bar
        data={this.state.chartData}
        options={this.state.chartOptions}/>
      </div>
    );
  }
}


export default JobVerticalBar
