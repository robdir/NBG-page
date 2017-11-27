import React, { PureComponent } from 'react';
import {Pie} from 'react-chartjs-2';


class PieChart extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
                  data: {
                      labels: ["Africa", "Asia", "Europe", "Latin America"],
                      datasets: [{
                        label: "Sectoren waarin een Webdeveloper werkzaam is",
                        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                        data: [25,25,25,25]
                      }]
                    },
                    options: {
                      responsive:true,
                      maintainAspectRatio: false,
                      title: {
                        display: true,
                        text: 'Predicted world population (millions) in 2050'
                      }
                    }
                  }
                }

        render() {
          return (
              <div className="chart-container">
                <div className="single-chart">
                <Pie data={this.state.data}
                options={this.state.options} />

                    </div>
                    </div>
                  );
                }
              }

          export default PieChart
