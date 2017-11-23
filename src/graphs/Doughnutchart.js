import React, { PureComponent } from 'react';
import {Doughnut} from 'react-chartjs-2';
import '../components/styles/Doughnuts.css'

class DoughnutChart extends PureComponent {
  constructor(props){
    super(props);
    this.state = {

      chartData_chart1:{
          labels: [
              'Red',
              'Green'
              ],
              datasets: [{
                data: [99,5],
                backgroundColor: [
                  '#CCC',
                  '#36A2EB'
                ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
              ]
            }],


          },//chartdata1

          chartOptions_chart1:{
              elements: {
                      center: {
                        text: 'Desktop',
                         color: '#36A2EB',
                              }
                            }
                          },
          chartData_chart2:{
              labels: [
                  'Grey',
                  'Pink'
                  ],
                  datasets: [{
                    data: [79,31],
                    backgroundColor: [
                      '#CCC',
                      '#36A2EB'
                    ],
              hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                  ]
                }]

              }

        }
      }

      render() {
        return (
          <div className="chart-container">
            <div className="single-chart"> <Doughnut data={this.state.chartData_chart1} options={this.state.chartOptions_chart1} />
            </div>
                    <div className="single-chart"> <Doughnut data={this.state.chartData_chart2} />
            </div>
          </div>
        );
      }
    }

export default DoughnutChart
