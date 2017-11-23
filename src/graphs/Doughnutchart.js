import React, { PureComponent } from 'react';
import {Doughnut} from 'react-chartjs-2';
import '../components/styles/Doughnuts.css'

class DoughnutChart extends PureComponent {
  constructor(props){
    super(props);
    this.state = {

      chartData_chart1:{
          labels: [
              'Baankans Webdeveloper 99%',
              ],
              datasets: [{
                data: [99],
                backgroundColor: [
                  '#43B034',
                  'rgba(0,0,0,0)'
                ],
          hoverBackgroundColor: [
            '#51D140',
            'rgba(0,0,0,0)',
              ]
            }],


          },//chartdata1

          chartOptions_chart1:{
              circumference: 6,
            },
          chartData_chart2:{
            labels: [
                'Gemiddelde Baankans Nederland 79.5%',
                ],
                datasets: [{
                  data: [79.5],
                  backgroundColor: [
                    '#E6B334',
                    'rgba(0,0,0,0)'
                  ],
            hoverBackgroundColor: [
              '#E7C369',
              'rgba(0,0,0,0)',
                ]
              }],


            },//chartdata1

            chartOptions_chart2:{
                circumference: 4,
              },

            } //this.state

      }

      render() {
        return (
          <div className="chart-container">
            <div className="single-chart"> <Doughnut data={this.state.chartData_chart1} options={this.state.chartOptions_chart1} />

            <p>Zeer Goed </p>
            </div>
            <div className="single-chart"> <Doughnut data={this.state.chartData_chart2} options={this.state.chartOptions_chart2} />
              <p> Goed </p>
            </div>
          </div>
        );
      }
    }

export default DoughnutChart
