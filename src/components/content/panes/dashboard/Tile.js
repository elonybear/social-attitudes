import React from 'react';

import {Chart} from 'chart.js';

import './css/Tile.css';
import 'chartjs-plugin-annotation';

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // var ctx = document.getElementById(this.props.name + "-chart").getContext('2d');
    // var scatterChart = new Chart(ctx, {
    //   type: 'scatter',
    //   data: {
    //     datasets: [
    //       {
    //         label: 'Scatter Dataset',
    //         data: [
    //           {
    //             x: -8.8,
    //             y: 0
    //           }, {
    //             x: 0,
    //             y: 10
    //           }, {
    //             x: 10,
    //             y: 5
    //           }
    //         ],
    //         backgroundColor: ['rgba(255, 99, 132, 0.2)'],
    //         borderColor: ['rgba(255,99,132,1)'],
    //         showLine: true
    //       }
    //     ]
    //   },
    //   options: {
    //     layout: {
    //       padding: {
    //         left: 10,
    //         right: 20,
    //         bottom: 10
    //       }
    //     },
    //     scales: {
    //       xAxes: [
    //         {
    //           type: 'linear',
    //           position: 'bottom'
    //         }
    //       ]
    //     },
    //     annotation: {
    //       annotations: [
    //         {
    //           type: "line",
    //           mode: "vertical",
    //           scaleID: "messages",
    //           value: "5.8",
    //           borderColor: "blue"
    //         }
    //       ]
    //     },
    //     legend: {
    //       display: false
    //     },
    //     title: {
    //       display: true,
    //       text: '# of Messages Sent'
    //     },
    //     scales: {
    //       yAxes: [
    //         {
    //           ticks: {
    //             beginAtZero: true
    //           },
    //           scaleLabel: {
    //             display: true,
    //             labelString: '# of Users'
    //           },
    //           "id": "users",
    //           "ticks": {
    //             max: 15
    //           }
    //         }
    //       ],
    //       xAxes: [
    //         {
    //           scaleLabel: {
    //             display: true,
    //             labelString: '# of Messages'
    //           },
    //           "id": "messages"
    //         }
    //       ]
    //     },
    //     elements: {
    //       point: {
    //         radius: 0
    //       }
    //     }
    //   }
    // });
  }

  render() {


    let styles = {
      'color': this.props.metric.color || 'black'
    }

    return (<div className="tile outset">
      {/* <canvas id={this.props.name + "-chart"}></canvas> */}
      <div className="metric">
        <div className="value" style={styles}>
          {this.props.metric.value}
        </div>
        <div className="subtitle">
          {this.props.metric.subtitle}
        </div>
        <div className="graph-btn">
          <a href="#">
            View {this.props.metric.button}
          </a>
        </div>
      </div>
    </div>)
  }
}
