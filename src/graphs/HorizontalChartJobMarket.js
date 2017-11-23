import React, { PureComponent } from 'react';
import {Bar} from 'react-chartjs-2';
import '../components/styles/Container_styles.css'

class HorizontalChartJobMarket extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: ['Baankans Webdeveloper 99%', 'Gemiddelde Baankans Nederland 79.5%'],
        datasets: [
          {
            label: ['Baankans'],
            backgroundColor: ['#14BCF0'],
            borderWidth: 0.1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,142,21,1)',
            data: [99, 79.5]
          },
        ]
      },
      chartOptions: {
            maintainAspectRatio: false,
            responsive:true,
            barPercentage:0.9,
            categoryPercentage: 1.0,
            tooltips: {
              mode: 'x-axis'
            },
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: false,
                  suggestedMin: 1500,
                      },

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


	getInitialState() {
		return this.state;
	}

	componentWillMount() {

			this.setState(this.state.chartData);

	}

  render() {
    return (
      <div className="doughnut">
        <Bar data={this.state.chartData} options={this.state.chartOptions} />
      </div>
    );
  }
};

export default HorizontalChartJobMarket
