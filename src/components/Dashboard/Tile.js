import React from 'react';

import './css/Tile.css';

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
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
