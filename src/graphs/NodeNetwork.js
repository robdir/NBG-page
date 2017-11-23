import React, { PureComponent } from "react";
import Graph from "react-graph-vis";

class NodeNetwork extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      graph: {
        nodes: [
          { id: 1, label: "Werkgever", color: "#4286f4" },
          { id: 2, label: "Web Developer", color: "#14bcf0" },
          { id: 3, label: "ICT'ER", color: "#4286f4" },
          { id: 4, label: "Gebruiker", color: "#4286f4" },
        ],
        edges: [{ from: 1, to: 2 }, { from: 3, to: 2 }, { from: 2, to: 4 }]
      },

      options: {
        height: '50%',
        width: '100%',
        clickToUse: 'false',
        layout: {
          hierarchical: false
        },
        edges: {
          color: "#000000",
        },
        physics: {
          enabled: false
        },
        nodes: {
          shape: 'circle',
        },
        interaction: {
          zoomView: false
        }
      },

      events: {
        select: function(event) {
          var { nodes, edges } = event;
          console.log("Selected nodes:");
          console.log(nodes);
          console.log("Selected edges:");
          console.log(edges);
        }
      }
    }
  }
    render() {
      return (
        <div className="fishyfishy">
           <Graph graph={this.state.graph} options={this.state.options} events={this.state.events}
           style={{ height: "640px" }} />
         </div>
      );
    }
}

export default NodeNetwork
