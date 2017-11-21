import React, { PureComponent } from 'react';
import {Bar} from 'react-chartjs-2';

class TestChart extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      chartData:{
          labels: ['WebDeveloper', 'Worcester','Springfield','Lowell', 'Cambridge', 'New Bedford'],
          datasets:[
          {
            label: 'Population',
            data:[
              657385,
              645324,
              123456,
              234532,
              657463,
              756453
            ],
            backgroundColor:[
              'rgba(255,99,132,0.6)',
              'rgba(0,99,132,0.6)',
              'rgba(255,0,132,0.6)',
            ]
          }
        ]
      }
    }
  }
  render(){
    return (
      <div className="chart" >
      <Bar
      data={this.state.chartData}
      options={{
        maintainAspectRatio:false
      }}
      />
      </div>
    )
  }
}

export default TestChart
