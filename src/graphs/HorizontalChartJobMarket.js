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
            label: ['Baankans WebDeveloper Zeer goed'],
            backgroundColor: ['#65a75b', '#e5e5e5'],
            borderWidth: 0.1,
            hoverBackgroundColor: '#14BCF0',
            data: [99, 79.5]
          },
        ]
      },
      chartOptions: {
            maintainAspectRatio: false,
            responsive:true,
            barPercentage:0.9,
            categoryPercentage: 1.0,
            scales: {
              yAxes: [{
                gridLines: {
                   color: "rgba(0, 0, 0, 0)",
               },
                ticks: {
                  beginAtZero: true,
                  suggestedMin: 1500,
                      },

                    }],
              xAxes: [{
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
      <div className="chart-jobmarket">
        <Bar data={this.state.chartData} options={this.state.chartOptions} />
      </div>
    );
  }
};

export default HorizontalChartJobMarket
